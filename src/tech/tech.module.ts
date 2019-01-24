import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechService } from './tech.service';
import { TechController } from './tech.controller';
import { Tech } from './tech.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tech])],
  providers: [TechService],
  controllers: [TechController],
})
export class TechModule {}
