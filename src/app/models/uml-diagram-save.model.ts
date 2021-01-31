import { UmlComponent } from './uml-component.model';

export class UmlDiagramSave {
  userId: string;
  userEmail: string;
  diagramType: string;
  diagramName: string;
  diagramElements: string;

  constructor(
    userId: string,
    userEmail: string,
    diagramType: string,
    diagramName: string,
    diagramElements: string) {

    this.userId = userId;
    this.userEmail = userEmail;
    this.diagramType = diagramType;
    this.diagramName = diagramName;
    this.diagramElements = diagramElements;
  }
}
