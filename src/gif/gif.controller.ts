import { Controller, Get, Param } from '@nestjs/common';
import { GifService } from './gif.service';
import { Gif } from './gif.entity';

@Controller('gif')
export class GifController {
  constructor(private readonly gifService: GifService) {}

  @Get()
  async getAll(): Promise<Gif[]> {
    return await this.gifService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id): Promise<Gif> {
      return await this.gifService.find(id);
  }

  @Get('type/:typeid')
  async getByTypeId(@Param('typeid') typeid): Promise<Gif[]> {
    return await this.gifService.getByTypeId(typeid);
  }

  @Get('data/:dataid')
  async getByDataId(@Param('dataid') dataid): Promise<Gif[]> {
    return await this.gifService.getByDataId(dataid);
  }

  @Get('type/data/:typeid/:dataid')
  async getByTypeIdAndDataId(@Param('typeid') typeid, @Param('dataid') dataid): Promise<Gif[]> {
    return await this.gifService.getByTypeIdAndDataId(typeid, dataid);
  }
}
