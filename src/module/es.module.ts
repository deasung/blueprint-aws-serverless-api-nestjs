import { Module } from '@nestjs/common';
import config from '../config';
import { EsService } from '../service/es.service';
import { HttpService } from '@nestjs/axios';

@Module({
  imports: [
    // ElasticsearchModule.registerAsync({
    //   useFactory: () => ({
    //     node: config.config.elasticsearch_log_url,
    //     maxRetries: 10,
    //     requestTimeout: 60000,
    //     pingTimeout: 60000,
    //     sniffOnSta
    //     t: true,
    //     headers: {
    //       Accept: 'application/json',
    //       ContentType: 'application/json',
    //     },
    //   }),
    // }),
  ],
  providers: [EsService, HttpService],
  exports: [EsService],
})
export class EsModule {}
