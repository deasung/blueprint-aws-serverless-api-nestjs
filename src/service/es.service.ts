import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import * as moment from 'moment-timezone';
import config from '../config';
import { LogstashReqDto } from '../dto/logstash.req.dto';
import { Utils } from '../util/utils';
import Message from '../Message';
import { ApiProtobufValuesRepository } from '../repository/api.protobuf.values.repository';

const esLogUrl = config.config.elasticsearch_log_url;

@Injectable()
export class EsService {
  constructor(
    private readonly httpService: HttpService,
    private apiProtobufValuesRepository: ApiProtobufValuesRepository,
  ) {}

  async reviewIdSearch(id: number): Promise<object> {
    try {
      const url = `${esLogUrl}/products_dev/_search`;
      const searchBody = {
        query: {
          bool: {
            filter: [
              {
                term: {
                  idreviewcomment: {
                    value: id,
                    boost: 1.0,
                  },
                },
              },
            ],
          },
        },
      };

      const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

      const res = await this.httpService
        .post(url, searchBody, {
          headers: headers,
        })
        .toPromise();

      const data = res.data;

      return data;
    } catch (err) {
      console.error(err);
    }

    return null;
  }

  async esProtobufLogSender(params: LogstashReqDto): Promise<void> {
    console.log('esProtobufLogSender start');

    try {
      //도메인 체크
      const apiType = Utils.domainCheckReturnApiType(params.domain_name);

      const api = params.api;

      const httpMethod = params.method.toLowerCase();

      const tempReplaceDomain =
        'https://' + params.domain_name + ':' + params.port;

      const temp = Utils.replaceAll(api, tempReplaceDomain, '');

      //api 체크 get 요청에서 data 쿼리스트링이 있는것만 체크함
      if (temp.indexOf('data') > 0) {
        const tempApi = temp.split('?');

        // console.log(tempApi);

        const apiEndPointUrl = tempApi[0];
        // console.log(apiEndPointUrl);

        const protobuf_data = params.protobuf_data;

        let data = '';

        if (protobuf_data !== undefined) {
          data = protobuf_data;
        } else {
          data = Utils.replaceAll(tempApi[1], 'data=', '');
        }

        //api messageType 체크
        const protobufMessageName =
          await this.apiProtobufValuesRepository.findProtobufMessageName(
            apiEndPointUrl,
            apiType,
            httpMethod,
          );

        const Type = Message.lookupType(
          protobufMessageName.protobuf_message_name,
        );

        const decodeData = Type.decode(Buffer.from(data, 'base64')).toJSON();

        params.encoding_protobuf_doc = decodeData;

        const currentYearMonth = moment().tz('Asia/Seoul').format('YYYYMM');

        const esUrl = `${esLogUrl}/${params.domain_name}_${currentYearMonth}/_doc`;

        console.log('esUrl:' + esUrl);
        console.log(JSON.stringify(params));

        await this.httpService.post(esUrl, params, null).toPromise();
      }
    } catch (e) {
      console.log(e);

      throw new HttpException('데이터 저장중 문제가 발생하였습니다.', 500);
    }

    console.log('esProtobufLogSender end');
  }
}
