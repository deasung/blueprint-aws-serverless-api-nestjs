import { Controller, Get, Param } from '@nestjs/common';
import { EsService } from '../service/es.service';
import { ApiResDto } from '../api.res.dto';

@Controller('/es')
export class EsSearchController {
  constructor(private readonly esService: EsService) {}

  @Get('/review/:id')
  async getReviewId(@Param('id') id: number): Promise<ApiResDto> {
    const result = await this.esService.reviewIdSearch(id);

    return new ApiResDto(true, 200, null, result);
  }
}
