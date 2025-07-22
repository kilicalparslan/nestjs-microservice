import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinateDTO } from './dto/create-coordinate.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  @Get()
  getRiderCoordinates(): string {
    return 'Rider coordinates endpoint';
  }

  @Post()
  saveRiderCoordinate(@Body() createRiderCoordinateDTO: CreateCoordinateDTO) {
    return createRiderCoordinateDTO;
  }
}
