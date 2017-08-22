/// <reference types="googlemaps" />
/// <reference types="geojson" />

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare interface Google {
  maps?: {
    Map: google.maps.Map;
  };
}

declare interface Window {
  google?: Google
}

declare type MongoId = string;

declare namespace vt {
  /**
   * Metadata
   */
  export interface MongoMetadata {
    _id: MongoId;
    __v?: number;
  }

  export interface CMSMetadata {
    updatedBy?: string;
    updatedAt?: Date;
    createdBy?: string;
    createdAt?: Date;
  }

  export type Metadata = MongoMetadata & CMSMetadata;

  export interface TourDefinition {
    name: string;
    label: string;
    code: string;
    parent?: MongoId;
    default?: MongoId;
    state?: 'draft' | 'published' | 'archived'
  }
}
