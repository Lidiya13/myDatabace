import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { OwnerRepository } from './repository/user-test.repository';
@Injectable()
export class UserService {
  constructor(
    private readonly ownerRepository: OwnerRepository
  ){}
  fetchDogList(){
    return this.ownerRepository.getOwnerWithDogList()
  }
}