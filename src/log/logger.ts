import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
  format: format.combine(
    // format.errors({ stack: true }),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.printf((info) => {
      return ` ${info.timestamp} ${info.level}: ${info.message}`;
    }),
  ),
});

if (process.env.NODE_ENV !== 'prod') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  );
}
