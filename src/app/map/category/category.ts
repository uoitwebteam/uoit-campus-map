export interface Anchor {
  left: number;
  top: number;
}

export class Category {
  // fillColor;
  // fillOpacity;
  icon: google.maps.Icon | {
    anchor: Anchor;
    size: google.maps.Size
  };
  constructor(category: Category) {
    Object.assign(this, category);
    const anchor = <Anchor>category.icon.anchor;
    const size = category.icon.size;
    this.icon.anchor = new google.maps.Point(anchor.left, anchor.top);
    this.icon.size =  new google.maps.Size(size.width, size.height);
  }
}
