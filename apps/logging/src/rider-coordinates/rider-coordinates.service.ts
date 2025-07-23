import { Injectable } from '@nestjs/common';
import { CreateCoordinateDTO } from './dto/create-coordinate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schema/rider-coordinates.schema';
import { Model } from 'mongoose';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private riderCoordinateModel: Model<RiderCoordinate>,
  ) {}

  async saveRiderCoordinate(createCoordinateDTO: CreateCoordinateDTO) {
    return await this.riderCoordinateModel.create(createCoordinateDTO);
  }
}
