import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty({ message: "categony name can't be an empty string" })
  name: string;
}
