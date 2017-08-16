/// <reference types="googlemaps" />

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare interface Google {
  maps?: {
    Map: google.maps.Map;
    test?: number;
  };
}

declare interface Window {
  google?: Google
}
