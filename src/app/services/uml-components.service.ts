import { Injectable } from '@angular/core';
import { UmlComponent } from '../models/uml-component.model';
import { UmlComponentRect } from '../models/uml-component-rect.model';
import { UmlComponentConnector } from '../models/uml-component-connector.model';
import { UmlComponentText } from '../models/uml-component-text.model';
import { UmlComponentLifeline } from '../models/uml-component-lifeline.model';
import { UmlComponentActivation } from '../models/uml-component-activation.model';
import { UmlComponentFragment } from '../models/uml-component-fragment.model';

@Injectable({
  providedIn: 'root',
})
export class UmlComponentsService {
  private umlClassComponentsList: UmlComponent[] = [
    new UmlComponent('Class', '/assets/uml_class_diagram/class_mini.svg', 'class'),
    new UmlComponent('Interface', '/assets/uml_class_diagram/interface_mini.svg', 'interface'),
    new UmlComponent('Text', '/assets/uml_class_diagram/text.svg', 'text')
  ];

  private umlDeploymentElementsList: UmlComponent[] = [
    new UmlComponent('Node', '/assets/uml_class_diagram/node.svg', 'node'),
    new UmlComponent('Artifact', '/assets/uml_class_diagram/artifact.svg', 'artifact'),
    new UmlComponent('Component', '/assets/uml_class_diagram/component.svg', 'component'),
    new UmlComponent('Text', '/assets/uml_class_diagram/text.svg', 'text')
  ];

  private umlLineConnectorsList: UmlComponent[] = [
    new UmlComponent('Line', '/assets/uml_class_diagram/line_r.svg', 'path_line_r'),
    new UmlComponent('Line', '/assets/uml_class_diagram/line_rt.svg', 'path_line_rt'),
    new UmlComponent('Line', '/assets/uml_class_diagram/line_t.svg', 'path_line_t'),
    new UmlComponent('Line', '/assets/uml_class_diagram/line_lt.svg', 'path_line_lt')
  ];

  private umlRequiredConnectorsList: UmlComponent[] = [
    new UmlComponent('Required', '/assets/uml_class_diagram/required_r.svg', 'path_required_r'),
    new UmlComponent('Required', '/assets/uml_class_diagram/required_rt.svg', 'path_required_rt'),
    new UmlComponent('Required', '/assets/uml_class_diagram/required_t.svg', 'path_required_t'),
    new UmlComponent('Required', '/assets/uml_class_diagram/required_lt.svg', 'path_required_lt'),
    new UmlComponent('Required', '/assets/uml_class_diagram/required_l.svg', 'path_required_l'),
    new UmlComponent('Required', '/assets/uml_class_diagram/required_lb.svg', 'path_required_lb'),
    new UmlComponent('Required', '/assets/uml_class_diagram/required_b.svg', 'path_required_b'),
    new UmlComponent('Required', '/assets/uml_class_diagram/required_rb.svg', 'path_required_rb')
  ];

  private umlInterfaceConnectorsList: UmlComponent[] = [
    new UmlComponent('Provided Interface', '/assets/uml_class_diagram/interface_r.svg', 'provided_interface_r'),
    new UmlComponent('Provided Interface', '/assets/uml_class_diagram/interface_rt.svg', 'provided_interface_rt'),
    new UmlComponent('Provided Interface', '/assets/uml_class_diagram/interface_t.svg', 'provided_interface_t'),
    new UmlComponent('Provided Interface', '/assets/uml_class_diagram/interface_lt.svg', 'provided_interface_lt'),
    new UmlComponent('Provided Interface', '/assets/uml_class_diagram/interface_l.svg', 'provided_interface_l'),
    new UmlComponent('Provided Interface', '/assets/uml_class_diagram/interface_lb.svg', 'provided_interface_lb'),
    new UmlComponent('Provided Interface', '/assets/uml_class_diagram/interface_b.svg', 'provided_interface_b'),
    new UmlComponent('Provided Interface', '/assets/uml_class_diagram/interface_rb.svg', 'provided_interface_rb')
  ];

  private umlComponentsElementsList: UmlComponent[] = [
    new UmlComponent('Component', '/assets/uml_class_diagram/component.svg', 'component'),
    new UmlComponent('Port', '/assets/uml_class_diagram/port.svg', 'port'),
    new UmlComponent('Text', '/assets/uml_class_diagram/text.svg', 'text'),
    new UmlComponent('Constraint', '/assets/uml_class_diagram/constraint.svg', 'constraint')
  ];

  private umlUseCasesComponentsList: UmlComponent[] = [
    new UmlComponent('Use case', '/assets/uml_class_diagram/use_case.svg', 'use_case'),
    new UmlComponent('Actor', '/assets/uml_class_diagram/actor.svg', 'actor'),
    new UmlComponent('System', '/assets/uml_class_diagram/system.svg', 'system'),
    new UmlComponent('Text', '/assets/uml_class_diagram/text.svg', 'text')
  ];

  private umlSequenceComponentsList: UmlComponent[] = [
    new UmlComponent('Lifeline', '/assets/uml_class_diagram/lifeline_object.svg', 'lifeline_object'),
    new UmlComponent('Lifeline', '/assets/uml_class_diagram/lifeline_actor.svg', 'lifeline_actor'),
    new UmlComponent('Lifeline', '/assets/uml_class_diagram/lifeline_boundary.svg', 'lifeline_c_boundary'),
    new UmlComponent('Lifeline', '/assets/uml_class_diagram/lifeline_control.svg', 'lifeline_c_control'),
    new UmlComponent('Lifeline', '/assets/uml_class_diagram/lifeline_entity.svg', 'lifeline_c_entity'),
    new UmlComponent('Activation', '/assets/uml_class_diagram/activation.svg', 'activation'),
    new UmlComponent('Fragment', '/assets/uml_class_diagram/fragment.svg', 'fragment'),
    new UmlComponent('Text', '/assets/uml_class_diagram/text.svg', 'text'),
    new UmlComponent('Message', '/assets/uml_class_diagram/message_synchronous.svg', 'message_synchronous'),
    new UmlComponent('Message', '/assets/uml_class_diagram/dependency_l.svg', 'path_dependency_l'),
    new UmlComponent('Message', '/assets/uml_class_diagram/association_r.svg', 'path_association_r'),
    new UmlComponent('Message', '/assets/uml_class_diagram/message_synchronous_b.svg', 'message_internal_b'),
    new UmlComponent('Message', '/assets/uml_class_diagram/message_synchronous_t.svg', 'message_internal_t')
  ];

  private umlInheritConnectorsList: UmlComponent[] = [
    new UmlComponent('Inheritance', '/assets/uml_class_diagram/inherit_r.svg', 'path_r'),
    new UmlComponent('Inheritance', '/assets/uml_class_diagram/inherit_rt.svg', 'path_rt'),
    new UmlComponent('Inheritance', '/assets/uml_class_diagram/inherit_t.svg', 'path_t'),
    new UmlComponent('Inheritance', '/assets/uml_class_diagram/inherit_lt.svg', 'path_lt'),
    new UmlComponent('Inheritance', '/assets/uml_class_diagram/inherit_l.svg', 'path_l'),
    new UmlComponent('Inheritance', '/assets/uml_class_diagram/inherit_lb.svg', 'path_lb'),
    new UmlComponent('Inheritance', '/assets/uml_class_diagram/inherit_b.svg', 'path_b'),
    new UmlComponent('Inheritance', '/assets/uml_class_diagram/inherit_rb.svg', 'path_rb')
  ];

  private umlImplementsConnectorsList: UmlComponent[] = [
    new UmlComponent('Implements', '/assets/uml_class_diagram/implements_r.svg', 'path_implements_r'),
    new UmlComponent('Implements', '/assets/uml_class_diagram/implements_rt.svg', 'path_implements_rt'),
    new UmlComponent('Implements', '/assets/uml_class_diagram/implements_t.svg', 'path_implements_t'),
    new UmlComponent('Implements', '/assets/uml_class_diagram/implements_lt.svg', 'path_implements_lt'),
    new UmlComponent('Implements', '/assets/uml_class_diagram/implements_l.svg', 'path_implements_l'),
    new UmlComponent('Implements', '/assets/uml_class_diagram/implements_lb.svg', 'path_implements_lb'),
    new UmlComponent('Implements', '/assets/uml_class_diagram/implements_b.svg', 'path_implements_b'),
    new UmlComponent('Implements', '/assets/uml_class_diagram/implements_rb.svg', 'path_implements_rb')
  ];

  private umlDependencyConnectorsList: UmlComponent[] = [
    new UmlComponent('Dependency', '/assets/uml_class_diagram/dependency_r.svg', 'path_dependency_r'),
    new UmlComponent('Dependency', '/assets/uml_class_diagram/dependency_rt.svg', 'path_dependency_rt'),
    new UmlComponent('Dependency', '/assets/uml_class_diagram/dependency_t.svg', 'path_dependency_t'),
    new UmlComponent('Dependency', '/assets/uml_class_diagram/dependency_lt.svg', 'path_dependency_lt'),
    new UmlComponent('Dependency', '/assets/uml_class_diagram/dependency_l.svg', 'path_dependency_l'),
    new UmlComponent('Dependency', '/assets/uml_class_diagram/dependency_lb.svg', 'path_dependency_lb'),
    new UmlComponent('Dependency', '/assets/uml_class_diagram/dependency_b.svg', 'path_dependency_b'),
    new UmlComponent('Dependency', '/assets/uml_class_diagram/dependency_rb.svg', 'path_dependency_rb')
  ];

  private umlAssociationConnectorsList: UmlComponent[] = [
    new UmlComponent('Association', '/assets/uml_class_diagram/association_r.svg', 'path_association_r'),
    new UmlComponent('Association', '/assets/uml_class_diagram/association_rt.svg', 'path_association_rt'),
    new UmlComponent('Association', '/assets/uml_class_diagram/association_t.svg', 'path_association_t'),
    new UmlComponent('Association', '/assets/uml_class_diagram/association_lt.svg', 'path_association_lt'),
    new UmlComponent('Association', '/assets/uml_class_diagram/association_l.svg', 'path_association_l'),
    new UmlComponent('Association', '/assets/uml_class_diagram/association_lb.svg', 'path_association_lb'),
    new UmlComponent('Association', '/assets/uml_class_diagram/association_b.svg', 'path_association_b'),
    new UmlComponent('Association', '/assets/uml_class_diagram/association_rb.svg', 'path_association_rb')
  ];

  private umlAggregationConnectorsList: UmlComponent[] = [
    new UmlComponent('Aggregation', '/assets/uml_class_diagram/aggregation_r.svg', 'path_aggregation_r'),
    new UmlComponent('Aggregation', '/assets/uml_class_diagram/aggregation_rt.svg', 'path_aggregation_rt'),
    new UmlComponent('Aggregation', '/assets/uml_class_diagram/aggregation_t.svg', 'path_aggregation_t'),
    new UmlComponent('Aggregation', '/assets/uml_class_diagram/aggregation_lt.svg', 'path_aggregation_lt'),
    new UmlComponent('Aggregation', '/assets/uml_class_diagram/aggregation_l.svg', 'path_aggregation_l'),
    new UmlComponent('Aggregation', '/assets/uml_class_diagram/aggregation_lb.svg', 'path_aggregation_lb'),
    new UmlComponent('Aggregation', '/assets/uml_class_diagram/aggregation_b.svg', 'path_aggregation_b'),
    new UmlComponent('Aggregation', '/assets/uml_class_diagram/aggregation_rb.svg', 'path_aggregation_rb')
  ];

  private umlCompositionConnectorsList: UmlComponent[] = [
    new UmlComponent('Composition', '/assets/uml_class_diagram/composition_r.svg', 'path_composition_r'),
    new UmlComponent('Composition', '/assets/uml_class_diagram/composition_rt.svg', 'path_composition_rt'),
    new UmlComponent('Composition', '/assets/uml_class_diagram/composition_t.svg', 'path_composition_t'),
    new UmlComponent('Composition', '/assets/uml_class_diagram/composition_lt.svg', 'path_composition_lt'),
    new UmlComponent('Composition', '/assets/uml_class_diagram/composition_l.svg', 'path_composition_l'),
    new UmlComponent('Composition', '/assets/uml_class_diagram/composition_lb.svg', 'path_composition_lb'),
    new UmlComponent('Composition', '/assets/uml_class_diagram/composition_b.svg', 'path_composition_b'),
    new UmlComponent('Composition', '/assets/uml_class_diagram/composition_rb.svg', 'path_composition_rb')
  ];

  constructor() { }

  getRequiredConnectorsList() {
    return this.umlRequiredConnectorsList.slice();
  }

  getInterfaceConnectorsList() {
    return this.umlInterfaceConnectorsList.slice();
  }

  getLineConnectorsList() {
    return this.umlLineConnectorsList.slice();
  }

  getInheritanceConnectorsList() {
    return this.umlInheritConnectorsList.slice();
  }

  getImplementsConnectorsList() {
    return this.umlImplementsConnectorsList.slice();
  }

  getDependencyConnectorsList() {
    return this.umlDependencyConnectorsList.slice();
  }

  getAssociationConnectorsList() {
    return this.umlAssociationConnectorsList.slice();
  }

  getAggregationConnectorsList() {
    return this.umlAggregationConnectorsList.slice();
  }

  getCompositionConnectorsList() {
    return this.umlCompositionConnectorsList.slice();
  }

  getDeploymentElementsList() {
    return this.umlDeploymentElementsList.slice();
  }

  getComponentsElementsList() {
    return this.umlComponentsElementsList.slice();
  }

  getClassComponentsList() {
    return this.umlClassComponentsList.slice();
  }

  getUseCasesComponentsList() {
    return this.umlUseCasesComponentsList.slice();
  }

  getSequenceComponentsList() {
    return this.umlSequenceComponentsList.slice();
  }
}
