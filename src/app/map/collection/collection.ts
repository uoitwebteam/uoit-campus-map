import { Feature } from '..';

export class FeatureCollection implements vt.Metadata {
  _id: MongoId;
  updatedAt?: Date;
  updatedBy?: string;
  createdAt?: Date;
  createdBy?: string;

  name?: string;
  type: 'FeatureCollection' = 'FeatureCollection';

  location?: MongoId;
  category?: MongoId;
  features: Feature<GeoJSON.GeometryObject>[];
}
