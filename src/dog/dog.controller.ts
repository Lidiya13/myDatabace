import { Body, Controller, Delete, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogUpdateDto } from './dog-update.dto';
import { DogEntity } from '../user/entity/dog.entity';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('dog') /*связь с внешним миром*/
export class DogController {
  constructor( /*инъекция зависимости*/
    private readonly dogService: DogService
  ) {}
  @Put(':dogId')
  @ApiOperation({ summary: 'Изменение имени и Id породы собаки' })
  @ApiResponse({ status: 200,type: DogUpdateDto, description: 'изменены имя собаки и порода собаки'})
  update (@Param('dogId', ParseIntPipe) dogId:number, @Body() dogUpdateDto: DogUpdateDto):Promise<DogEntity>{
    return this.dogService.updateDog(dogId, dogUpdateDto);
  }
  @Delete(':dogId')
  @ApiOperation({ summary: 'удаление собаки' })
  @ApiResponse({ status: 200, type: DogUpdateDto, description: 'данные по собаке удалены' })
  async remove (@Param('dogId', ParseIntPipe) dogId:number):Promise<{message:string}>{
    /*return this.dogService.removeDog(dogId);*/
    await this.dogService.removeDog(dogId);
    return {message:'Собака успешно удалена!'};
  }
}