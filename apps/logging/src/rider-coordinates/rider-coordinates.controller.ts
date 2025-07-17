import { Controller, Get } from '@nestjs/common';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  @Get()
  getRiderCoordinates(): string {
    return 'Rider coordinates endpoint';
  }
}
