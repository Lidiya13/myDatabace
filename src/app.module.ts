import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerEntity } from './user/entity/owner.entity';
import { DogEntity } from './user/entity/dog.entity';
import {resolve} from "path";
import { BreedEntity } from './user/entity/breed.entity';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'fitually',
      entities: [OwnerEntity, DogEntity, BreedEntity],
      logging: true,
      synchronize: true,
    }),
    DogModule
  ]
})
export class AppModule {}
