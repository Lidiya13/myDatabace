import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { DogEntity } from './dog.entity';

@Entity('breed')
export class BreedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  breedName: string;

  @OneToMany(()=>DogEntity, dogbreed=>dogbreed.breed)
  dogbreed: DogEntity[];
}