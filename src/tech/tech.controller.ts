import { Controller, Get } from '@nestjs/common';
import { TechService } from './tech.service';
import { Tech } from './tech.entity';

@Controller('techs')
export class TechController {
  constructor(private readonly techService: TechService) {}

  @Get()
  async getAll(): Promise<Tech[]> {
    return await this.techService.findAll();
  }
}
