import { Controller, Get, Param } from '@nestjs/common';
import { TechService } from './tech.service';
import { Tech } from './tech.entity';

@Controller('techs')
export class TechController {
  constructor(private readonly techService: TechService) {}

  @Get()
  async getAll(): Promise<Tech[]> {
    return await this.techService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id): Promise<Tech> {
      return await this.techService.find(id);
  }
}
