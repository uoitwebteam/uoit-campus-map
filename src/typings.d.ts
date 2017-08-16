/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare interface Window {
  google?: {
    maps?: {
      Map: google.maps.Map;
    };
  };
}
