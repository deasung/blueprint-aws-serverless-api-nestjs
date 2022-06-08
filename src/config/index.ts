import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({
  path: path.resolve(
    process.env.NODE_ENV === 'prod'
      ? './env/.prod.env'
      : process.env.NODE_ENV === 'dev'
      ? './env/.dev.env'
      : './env/.local.env',
  ),
});

export default {
  config: {
    jwt_secret: process.env.JWT_SECRET_KEY,

    master_database: {
      config: {
        client: process.env.MASTER_DATABASE_CLIENT,
        version: process.env.MASTER_DATABASE_VERSION,
        useNullAsDefault: true,
        debug: process.env.KNEX_DEBUG_MODE === 'true',
        connection: {
          host: process.env.MASTER_DATABASE_HOST,
          database: process.env.MASTER_DATABASE_NAME,
          port: process.env.MASTER_DATABASE_PORT,
          user: process.env.MASTER_DATABASE_USER,
          password: process.env.MASTER_DATABASE_PASSWORD,
        },
      },
    },
    slave_database: {
      config: {
        client: process.env.SLAVE_DATABASE_CLIENT,
        version: process.env.SLAVE_DATABASE_VERSION,
        useNullAsDefault: true,
        debug: process.env.KNEX_DEBUG_MODE === 'true',
        connection: {
          host: process.env.SLAVE_DATABASE_HOST,
          database: process.env.SLAVE_DATABASE_NAME,
          port: process.env.SLAVE_DATABASE_PORT,
          user: process.env.SLAVE_DATABASE_USER,
          password: process.env.SLAVE_DATABASE_PASSWORD,
        },
      },
    },
    elasticsearch_log_url: process.env.ES_GLOWPICK_LOG,
    elasticsearch_index_product: process.env.ES_INDEX_PRODUCT
  },
};
