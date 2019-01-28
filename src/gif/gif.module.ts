import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GifService } from './gif.service';
import { GifController } from './gif.controller';
import { Gif } from './gif.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gif])],
  providers: [GifService],
  controllers: [GifController],
})
export class GifModule {}
