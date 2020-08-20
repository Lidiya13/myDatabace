import { Body, Controller, Get, Param, ParseIntPipe, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { DogUpdateDto } from '../dog/dog-update.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {
  }
  @Get()
  getDogList(){
    return this.userService.fetchDogList()
  }
  /*@Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.fetchDogList();
  }*/
 }