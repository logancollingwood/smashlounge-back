import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TechModule } from './tech/tech.module';
import { TechController } from './tech/tech.controller';
import { TechService } from './tech/tech.service';

import { CharModule } from './char/char.module';
import { CharController } from './char/char.controller';
import { CharService } from './char/char.service';

import { GroupController } from './group/group.controller';
import { GroupService } from './group/group.service';
import { GroupModule } from './group/group.module';

import { GifController } from './gif/gif.controller';
import { GifService } from './gif/gif.service';
import { GifModule } from './gif/gif.module';

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
    CharModule,
    GroupModule,
    GifModule,
  ],
  controllers: [AppController, TechController, CharController, GroupController, GifController],
  providers: [AppService, TechService, CharService, GroupService, GifService],
})
export class AppModule {}
