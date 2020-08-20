import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogRepository } from './dog.repository';

@Module({
  controllers: [DogController],
  providers: [DogService],
  imports: [TypeOrmModule.forFeature([DogRepository])]
})
export class DogModule {
}