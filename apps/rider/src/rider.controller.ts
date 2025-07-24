import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  // @Get(':id')
  @MessagePattern({ cmd: 'get_rider_by_id' })
  getRiderById(data: any) {
    return Promise.resolve({
      _id: data.id,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    });
  }
}
