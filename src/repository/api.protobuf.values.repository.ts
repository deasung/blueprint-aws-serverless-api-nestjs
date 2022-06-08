import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class ApiProtobufValuesRepository {
  constructor(
    @InjectKnex('slaveConnection') private readonly slaveKnex: Knex,
    @InjectKnex() private readonly masterKnex: Knex,
  ) {}

  async findProtobufMessageName(
    apiUrl: string,
    apiType: string,
    httpMethod: string,
  ): Promise<any> {
    const temp = this.slaveKnex
      .select('apv.protobuf_message_name')
      .from('common.api_protobuf_values as apv')
      .where('apv.api_url', '=', apiUrl)
      .where('apv.api_type', '=', apiType)
      .where('apv.http', httpMethod)
      .first();

    console.log(temp);

    return temp;
  }
}
