import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharService } from './char.service';
import { CharController } from './char.controller';
import { Char } from './char.entity';
import { Gif } from '../gif/gif.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Char, Gif])],
  providers: [CharService],
  controllers: [CharController],
})
export class CharModule {}
