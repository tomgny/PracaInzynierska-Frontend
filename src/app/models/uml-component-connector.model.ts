import { UmlComponent } from "./uml-component.model";

export class UmlComponentConnector extends UmlComponent {
  bottomX: number;
  bottomY: number;
  arrowX: number;
  arrowY: number;

  connectFromId?: number;
  connectToId?: number;
}
