import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_test')
export class UserTestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}