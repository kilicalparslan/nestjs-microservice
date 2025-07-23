import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinateDTO } from './dto/create-coordinate.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(
    private readonly riderCoordinatesService: RiderCoordinatesService,
  ) {}

  @Get()
  getRiderCoordinates(): string {
    return 'Rider coordinates endpoint';
  }

  @Post()
  saveRiderCoordinate(@Body() createCoordinateDTO: CreateCoordinateDTO) {
    return this.riderCoordinatesService.saveRiderCoordinate(
      createCoordinateDTO,
    );
  }
}
