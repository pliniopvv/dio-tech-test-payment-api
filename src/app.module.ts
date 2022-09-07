import * as Dotenv from 'dotenv';
Dotenv.config({path: '.env'});


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { debug } from 'console';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { env } from './utils/Utils.tools';

let DB_SOURCE = env('DB_SOURCE');

debug("Diretório do DB >", DB_SOURCE);

let _entities = [];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: DB_SOURCE,
      entities: _entities,
      synchronize: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
