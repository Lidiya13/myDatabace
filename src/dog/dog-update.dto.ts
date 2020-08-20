import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DogUpdateDto{
  @IsString()
  @ApiProperty({
    description: 'Имя собаки',
    type: String,
    example: 'Jack',
  })
    /*@IsNotEmpty()-пустая строка, null, undefined*/
    /*@IsDefined()-null, undefined*/
  name: string;
  @IsInt()
  @ApiProperty({
    description: 'Id породы, к которой относится собака',
    type: Number,
    example: 1,
  })
  breedId: number;
}