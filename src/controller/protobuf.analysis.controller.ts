import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EsService } from '../service/es.service';
import { ApiResDto } from '../api.res.dto';
import { LogstashReqDto } from '../dto/logstash.req.dto';
import { EventBrigeReqDto } from '../dto/event.brige.req.dto';

@Controller('/protobuf')
export class ProtobufConvertController {
  constructor(private readonly esService: EsService) {}

  @Post('/encode/convert')
  async encodeConvert(@Body() params: LogstashReqDto): Promise<ApiResDto> {
    await this.esService.esProtobufLogSender(params);

    return new ApiResDto(true, 200, null, null);
  }

  @Post('/review/test')
  async reviewTest(@Body() params: EventBrigeReqDto): Promise<ApiResDto> {
    console.log('reviewTest call');

    console.log(params);

    return new ApiResDto(true, 200, null, null);
  }
}
