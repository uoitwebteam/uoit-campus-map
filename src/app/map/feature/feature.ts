/**
 * Custom properties to include in a `Feature` object for
 * rendering inside Google maps (i.e. as part of an infowindow).
 *
 * @export
 * @interface FeatureProperties
 */
export interface FeatureProperties {
  name?: string;
  label?: string;
  href?: string;
  desc?: string;
  building?: MongoId;
  scene?: MongoId;
  category: MongoId;
  linked: 'none' | 'buildings' | 'scenes';
}

/**
 * Container class for map feature data that will be compatible
 * for use with `google.maps.Data`, in the format it is received
 * from the API.
 *
 * @export
 * @class Feature
 * @implements {GeoJSON.Feature<T>}
 * @implements {vt.MongoMetadata}
 * @implements {vt.CMSMetadata}
 * @template T
 */
export class Feature<T extends GeoJSON.GeometryObject> implements GeoJSON.Feature<T>, vt.MongoMetadata, vt.CMSMetadata {
  _id: MongoId;
  updatedAt?: Date;
  updatedBy?: string;
  createdAt?: Date;
  createdBy?: string;
  /**
   * A fascimile of the `Feature`'s MongoDB `_id` property for
   * compatibility with Google Maps' GeoJSON interpreter.
   *
   * @type {MongoId}
   * @memberof Feature
   */
  id: MongoId;
  /**
   * The database ID of this `Feature`'s associated "location",
   * i.e. the MongoDB ObjectID for either "north" or "downtown".
   *
   * @type {MongoId}
   * @memberof Feature
   */
  location: MongoId;
  /**
   * An array containing the database IDs of `FeatureCollection`s that
   * can be used to group this feature.
   *
   * @type {MongoId[]}
   * @memberof Feature
   */
  group: MongoId[];
  /**
   * Property for compliance with GeoJSON spec; this property must always
   * be set to `'Feature'` for every `Feature` object.
   *
   * @type {'Feature'}
   * @memberof Feature
   */
  type: 'Feature' = 'Feature';
  /**
   * Custom properties passed into the `Feature`'s data by Google Maps.
   *
   * @type {FeatureProperties}
   * @memberof Feature
   */
  properties: FeatureProperties;
  /**
   * The `Feature`'s geometry definition, in GeoJSON-compliant format.
   * Must include a `type` and `coordinates` property.
   *
   * @type {T}
   * @memberof Feature
   */
  geometry: T
}
