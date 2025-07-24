import { Inject, Injectable } from '@nestjs/common';
import { CreateCoordinateDTO } from './dto/create-coordinate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schema/rider-coordinates.schema';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private riderCoordinateModel: Model<RiderCoordinate>,
    @Inject('RIDER_SERVICE') private client: ClientProxy,
  ) {}

  async getRiderCoordinates(riderId: string) {
    try {
      const coordinates = await this.riderCoordinateModel.find({
        rider: riderId,
      });
      const rider = await firstValueFrom(
        this.client.send({ cmd: 'get_rider_by_id' }, { id: riderId }),
      );
      return { coordinates, rider };
    } catch (error) {
      throw new Error(
        `Error fetching coordinates for rider ${riderId}: ${error.message}`,
      );
    }
  }

  async saveRiderCoordinate(createCoordinateDTO: CreateCoordinateDTO) {
    return await this.riderCoordinateModel.create(createCoordinateDTO);
  }
}
