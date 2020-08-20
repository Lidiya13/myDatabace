import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DogEntity } from './dog.entity';

@Entity('ownerd')
export class OwnerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany (()=>DogEntity, dog=>dog.ownerd)
  dog: DogEntity[];
}