export class UmlComponent {
  name: string;
  imgUrl: string;
  type: string;
  svgGroup: SVGGElement;

  constructor(name: string, imgUrl: string, type: string) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.type = type;
  }
}
