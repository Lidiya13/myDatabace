import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';
import { OwnerEntity } from './owner.entity';
import { BreedEntity } from './breed.entity';

@Entity('dog')
export class DogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dogName: string;

  @ManyToOne(()=>OwnerEntity, ownerd=>ownerd.dog)
  ownerd: OwnerEntity;

  @Column()
  ownerdId: number;

  @ManyToOne (()=>BreedEntity, breed=>breed.dogbreed)
  breed: BreedEntity;
  
  @Column()
  breedId: number;
}