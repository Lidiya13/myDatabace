import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DogCreateDto{
  @IsString()
  @ApiProperty({
    description: 'Имя собаки',
    type: String,
    example: 'Jack',
  })
  dogName: string;
  @IsInt()
  @ApiProperty({
    description: 'Id хозяина собаки',
    type: Number,
    example: 1,
  })
  ownerdId: number;
  @IsInt()
  @ApiProperty({
    description: 'Id породы собаки',
    type: Number,
    example: 1,
  })
  breedId: number;
}