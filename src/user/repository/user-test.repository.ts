import { EntityRepository, Repository } from 'typeorm';
import { OwnerEntity } from '../entity/owner.entity';

@EntityRepository(OwnerEntity)
export class OwnerRepository extends Repository<OwnerEntity> {
  async getOwnerWithDogList():Promise<OwnerEntity[]>{
    const queryBuilder=this.createQueryBuilder('owner')
      .leftJoinAndSelect("owner.dog", "dog")
      .leftJoinAndSelect("dog.breed", "breed");
    const result=await queryBuilder.getMany();
    return result;
  }
}