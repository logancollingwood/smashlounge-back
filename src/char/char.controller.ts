import { Controller, Get, Param } from '@nestjs/common';
import { CharService } from './char.service';
import { Char } from './char.entity';

@Controller('chars')
export class CharController {
  constructor(private readonly charService: CharService) {}

  @Get()
  async getAll(): Promise<Char[]> {
    return await this.charService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id): Promise<Char> {
      return await this.charService.find(id);
  }
}
