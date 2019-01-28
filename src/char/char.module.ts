import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharService } from './char.service';
import { CharController } from './char.controller';
import { Char } from './char.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Char])],
  providers: [CharService],
  controllers: [CharController],
})
export class CharModule {}
