/// <reference types="googlemaps" />

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
