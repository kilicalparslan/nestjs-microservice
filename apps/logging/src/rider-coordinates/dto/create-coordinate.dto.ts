import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCoordinateDTO {
  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @IsString()
  @IsNotEmpty()
  rider: string;
}
