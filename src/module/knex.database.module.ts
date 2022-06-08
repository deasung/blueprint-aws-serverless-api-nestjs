import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';

import config from '../config';

const masterDatabase = config.config.master_database.config;
const slaveDatabase = config.config.slave_database.config;

@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: masterDatabase,
      }),
    }),
    KnexModule.forRootAsync(
      {
        useFactory: () => ({
          config: slaveDatabase,
        }),
      },
      'slaveConnection',
    ),
  ],
})
export class KnexDatabaseModule {}
