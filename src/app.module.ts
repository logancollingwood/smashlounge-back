import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechModule } from './tech/tech.module';
import { TechController } from './tech/tech.controller';
import { TechService } from './tech/tech.service';
require('dotenv').config();
import * as PostgressConnectionStringParser from 'pg-connection-string';
const connectionOptions = PostgressConnectionStringParser.parse(process.env.DATABASE_URL);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: connectionOptions.host,
      port: connectionOptions.port || 5432,
      username: connectionOptions.user,
      password: connectionOptions.password,
      database: connectionOptions.database,
      schema: 'smashlounge',
      entities: [
        './**/*.entity.ts',
      ],
      extra: {
        ssl: true,
      },
      ssl: true,
      synchronize: true,
      logging: true,
    }),
    TechModule,
  ],
  controllers: [AppController, TechController],
  providers: [AppService, TechService],
})
export class AppModule {}
