import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinateDTO } from './dto/create-coordinate.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(
    private readonly riderCoordinatesService: RiderCoordinatesService,
  ) {}

  @Get(':id')
  getRiderCoordinates(@Param() params: any) {
    return this.riderCoordinatesService.getRiderCoordinates(params.id);
  }

  @Post()
  saveRiderCoordinate(@Body() createCoordinateDTO: CreateCoordinateDTO) {
    return this.riderCoordinatesService.saveRiderCoordinate(
      createCoordinateDTO,
    );
  }
}
