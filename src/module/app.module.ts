import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { EsSearchController } from '../controller/es-search.controller';
import { EsService } from '../service/es.service';
import { ProtobufConvertController } from '../controller/protobuf.analysis.controller';
import { KnexDatabaseModule } from './knex.database.module';
import { ApiProtobufValuesRepository } from '../repository/api.protobuf.values.repository';

@Module({
  imports: [HttpModule, KnexDatabaseModule],
  controllers: [AppController, EsSearchController, ProtobufConvertController],
  providers: [AppService, EsService, ApiProtobufValuesRepository],
  exports: [EsService],
})
export class AppModule {}
