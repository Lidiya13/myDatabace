import { Injectable } from '@nestjs/common';
import { DogRepository } from './dog.repository';
import { DogUpdateDto } from './dog-update.dto';
import { DogEntity } from '../user/entity/dog.entity';

@Injectable()
export class DogService {
  constructor(
    private readonly dogRepository: DogRepository
  ){}
  async updateDog(dogId:number, dogUpdate:DogUpdateDto):Promise<DogEntity>{ /*не забывать тайпинг*/
    const dog=await this.dogRepository.findDogById(dogId); /*функцию, которая ищет собаку по заданному id*/
    if (dogUpdate.name){
      dog.dogName=dogUpdate.name;/*переприсваивание занчения переменной*/
    }
    if (dogUpdate.breedId) {
      dog.breedId = dogUpdate.breedId;
    }
    const saveDogData=await this.dogRepository.save(dog); /*функция с сохранением и возвратом*/
    return saveDogData;
  }
  async removeDog(dogId:number):Promise<void>{
    const dog1=await this.dogRepository.findDogById(dogId);
    await this.dogRepository.remove(dog1);
    /*return dog1; - возврат удаляемой сущности*/
  }

}