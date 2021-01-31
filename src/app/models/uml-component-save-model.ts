export class UmlComponentSave {
  name: string;
  imgUrl: string;
  type: string;
  outerHTML: string;

  constructor(name: string, imgUrl: string, type: string, outerHTML: string) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.type = type;
    this.outerHTML = outerHTML;
  }
}
