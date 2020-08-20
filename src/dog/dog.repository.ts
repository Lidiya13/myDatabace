import { EntityRepository, Repository } from 'typeorm';
import { DogEntity } from '../user/entity/dog.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { FORBIDDEN_MESSAGE } from '@nestjs/core/guards/constants';

@EntityRepository(DogEntity) /*общение с сущностями*/
export class DogRepository extends Repository<DogEntity>{
  async findDogById(id:number):Promise<DogEntity>{ /*выборка*/
    const queryBuilder=this.createQueryBuilder('dog')
      .where('dog.id=:dogId',{dogId:id}); /*где ...*/
    const dogResult=await queryBuilder.getOne();
    if (!dogResult){ /*!-отрицание*/
      throw new HttpException({message:'Собака с заданным id не найдена'}, HttpStatus.NOT_FOUND);
    }
    return dogResult;
    /*return queryBuilder.getOne(); /!*результат выборки*!/*/
  }
}