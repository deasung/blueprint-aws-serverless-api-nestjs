import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { logger } from '../log/logger';
import { ApiResDto } from '../api.res.dto';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    console.log(exception);
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'BAD_REQUEST';
    const stackTrace =
      exception instanceof HttpException ? exception.stack : exception;

    logger.error(`path: ${request.path}, exception: ${stackTrace}`);

    response.status(status).json(new ApiResDto(false, status, message, null));
  }
}
