export interface AnchorPoint extends google.maps.Point {
  left: number;
  top: number;
}

export class Category implements google.maps.Data.StyleOptions, vt.Metadata {
  _id: MongoId;
  __v?: number;
  name?: string;
  clickable?: boolean;
  cursor?: string;
  draggable?: boolean;
  editable?: boolean;
  fillColor?: string;
  fillOpacity?: number;
  shape?: google.maps.MarkerShape;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  title?: string;
  visible?: boolean;
  zIndex?: number;
  icon?: google.maps.Icon;
  constructor(category: Category) {
    Object.assign(this, category);
    const anchor = <AnchorPoint>category.icon.anchor;
    const size = category.icon.size;
    this.icon.anchor = new google.maps.Point(anchor.left, anchor.top);
    this.icon.size =  new google.maps.Size(size.width, size.height);
  }
}
