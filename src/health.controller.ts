import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get('api/health')
  getHello(): string {
    return;
  }
}
