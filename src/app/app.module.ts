import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MainBoardComponent } from './main-nav/main-board/main-board.component';
import { UmlClassComponentsComponent } from './main-nav/main-board/uml-class-components/uml-class-components.component';
import { UmlBoardComponent } from './main-nav/main-board/uml-board/uml-board.component';
import { UmlComponentItemComponent } from './main-nav/main-board/uml-component-item/uml-component-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DraggableDirective } from './main-nav/directives/simple-basic/draggable.directive';
import { DroppableDirective } from './main-nav/directives/simple-basic/droppable.directive';
import { DraggableSnappingDirective } from './main-nav/directives/simple-basic/draggable-snapping.directive';
import { DraggablePathRDirective } from './main-nav/directives/paths/draggable-path-r.directive';
import { DraggablePathRtDirective } from './main-nav/directives/paths/draggable-path-rt.directive';
import { DraggablePathTDirective } from './main-nav/directives/paths/draggable-path-t.directive';
import { DraggablePathLtDirective } from './main-nav/directives/paths/draggable-path-lt.directive';
import { DraggablePathLDirective } from './main-nav/directives/paths/draggable-path-l.directive';
import { DraggablePathLbDirective } from './main-nav/directives/paths/draggable-path-lb.directive';
import { DraggablePathBDirective } from './main-nav/directives/paths/draggable-path-b.directive';
import { DraggablePathRbDirective } from './main-nav/directives/paths/draggable-path-rb.directive';
import { EditableTextDirective } from './main-nav/directives/text/editable-text.directive';
import { ClassClassnameDirective } from './main-nav/directives/class-interface/class-classname.directive';
import { ClassMethodDirective } from './main-nav/directives/class-interface/class-method.directive';
import { ClassFieldDirective } from './main-nav/directives/class-interface/class-field.directive';
import { ImplemetsRDirective } from './main-nav/directives/implements/implemets-r.directive';
import { ImplemetsRtDirective } from './main-nav/directives/implements/implemets-rt.directive';
import { ImplemetsTDirective } from './main-nav/directives/implements/implemets-t.directive';
import { ImplemetsLtDirective } from './main-nav/directives/implements/implemets-lt.directive';
import { ImplemetsLDirective } from './main-nav/directives/implements/implemets-l.directive';
import { ImplemetsLbDirective } from './main-nav/directives/implements/implemets-lb.directive';
import { ImplemetsBDirective } from './main-nav/directives/implements/implemets-b.directive';
import { ImplemetsRbDirective } from './main-nav/directives/implements/implemets-rb.directive';
import { DependencyRDirective } from './main-nav/directives/dependency/dependency-r.directive';
import { DependencyRtDirective } from './main-nav/directives/dependency/dependency-rt.directive';
import { DependencyTDirective } from './main-nav/directives/dependency/dependency-t.directive';
import { DependencyLtDirective } from './main-nav/directives/dependency/dependency-lt.directive';
import { DependencyLDirective } from './main-nav/directives/dependency/dependency-l.directive';
import { DependencyLbDirective } from './main-nav/directives/dependency/dependency-lb.directive';
import { DependencyBDirective } from './main-nav/directives/dependency/dependency-b.directive';
import { DependencyRbDirective } from './main-nav/directives/dependency/dependency-rb.directive';
import { CompositionRDirective } from './main-nav/directives/composition/composition-r.directive';
import { CompositionRtDirective } from './main-nav/directives/composition/composition-rt.directive';
import { CompositionTDirective } from './main-nav/directives/composition/composition-t.directive';
import { CompositionLtDirective } from './main-nav/directives/composition/composition-lt.directive';
import { CompositionLDirective } from './main-nav/directives/composition/composition-l.directive';
import { CompositionLbDirective } from './main-nav/directives/composition/composition-lb.directive';
import { CompositionBDirective } from './main-nav/directives/composition/composition-b.directive';
import { CompositionRbDirective } from './main-nav/directives/composition/composition-rb.directive';
import { AssociationRDirective } from './main-nav/directives/association/association-r.directive';
import { AssociationRtDirective } from './main-nav/directives/association/association-rt.directive';
import { AssociationTDirective } from './main-nav/directives/association/association-t.directive';
import { AssociationLtDirective } from './main-nav/directives/association/association-lt.directive';
import { AssociationLDirective } from './main-nav/directives/association/association-l.directive';
import { AssociationLbDirective } from './main-nav/directives/association/association-lb.directive';
import { AssociationBDirective } from './main-nav/directives/association/association-b.directive';
import { AssociationRbDirective } from './main-nav/directives/association/association-rb.directive';
import { AggregationRDirective } from './main-nav/directives/aggregation/aggregation-r.directive';
import { AggregationRtDirective } from './main-nav/directives/aggregation/aggregation-rt.directive';
import { AggregationTDirective } from './main-nav/directives/aggregation/aggregation-t.directive';
import { AggregationLtDirective } from './main-nav/directives/aggregation/aggregation-lt.directive';
import { AggregationLDirective } from './main-nav/directives/aggregation/aggregation-l.directive';
import { AggregationLbDirective } from './main-nav/directives/aggregation/aggregation-lb.directive';
import { AggregationBDirective } from './main-nav/directives/aggregation/aggregation-b.directive';
import { AggregationRbDirective } from './main-nav/directives/aggregation/aggregation-rb.directive';
import { MoveableDraggableDirective } from './main-nav/directives/simple-basic/moveable-draggable.directive';
import { HomeComponent } from './main-nav/home/home.component';
import { DocsComponent } from './main-nav/docs/docs.component';
import { DiagramChoiceComponent } from './main-nav/diagram-choice/diagram-choice.component';
import { DiagramMenuComponent } from './main-nav/diagram-menu/diagram-menu.component';
import { UmlSequenceComponentsComponent } from './main-nav/main-board/uml-sequence-components/uml-sequence-components.component';
import { LifelineDirective } from './main-nav/directives/lifeline/lifeline.directive';
import { ActivationDirective } from './main-nav/directives/activation/activation.directive';
import { FragmentDirective } from './main-nav/directives/fragment/fragment.directive';
import { MessageSynchronousDirective } from './main-nav/directives/message/message-synchronous.directive';
import { MessageInternalBDirective } from './main-nav/directives/message/message-internal-b.directive';
import { MessageInternalTDirective } from './main-nav/directives/message/message-internal-t.directive';
import { UmlUseCasesComponentsComponent } from './main-nav/main-board/uml-use-cases-components/uml-use-cases-components.component';
import { LineRDirective } from './main-nav/directives/line/line-r.directive';
import { LineRtDirective } from './main-nav/directives/line/line-rt.directive';
import { LineTDirective } from './main-nav/directives/line/line-t.directive';
import { UmlComponentsElementsComponent } from './main-nav/main-board/uml-components-elements/uml-components-elements.component';
import { UmlDeploymentElementsComponent } from './main-nav/main-board/uml-deployment-elements/uml-deployment-elements.component';
import { ComponentDirective } from './main-nav/directives/component/component.directive';
import { InterfaceRDirective } from './main-nav/directives/interface/interface-r.directive';
import { InterfaceRtDirective } from './main-nav/directives/interface/interface-rt.directive';
import { InterfaceTDirective } from './main-nav/directives/interface/interface-t.directive';
import { InterfaceLtDirective } from './main-nav/directives/interface/interface-lt.directive';
import { InterfaceLDirective } from './main-nav/directives/interface/interface-l.directive';
import { InterfaceLbDirective } from './main-nav/directives/interface/interface-lb.directive';
import { InterfaceBDirective } from './main-nav/directives/interface/interface-b.directive';
import { InterfaceRbDirective } from './main-nav/directives/interface/interface-rb.directive';
import { RequiredRDirective } from './main-nav/directives/required/required-r.directive';
import { RequiredRtDirective } from './main-nav/directives/required/required-rt.directive';
import { RequiredTDirective } from './main-nav/directives/required/required-t.directive';
import { RequiredLtDirective } from './main-nav/directives/required/required-lt.directive';
import { RequiredLDirective } from './main-nav/directives/required/required-l.directive';
import { RequiredLbDirective } from './main-nav/directives/required/required-lb.directive';
import { RequiredBDirective } from './main-nav/directives/required/required-b.directive';
import { RequiredRbDirective } from './main-nav/directives/required/required-rb.directive';
import { NodeDirective } from './main-nav/directives/node/node.directive';
import { ArtifactDirective } from './main-nav/directives/artifact/artifact.directive';
import { AuthSaveComponent } from './auth/auth-save/auth-save.component';
import { AuthLoadComponent } from './auth/auth-load/auth-load.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadedTableComponent } from './auth/auth-load/loaded-table/loaded-table.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'diagram-choice', component: DiagramChoiceComponent },
  { path: 'diagram/:type', component: MainBoardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainBoardComponent,
    UmlClassComponentsComponent,
    UmlBoardComponent,
    UmlComponentItemComponent,
    DraggableDirective,
    DroppableDirective,
    DraggableSnappingDirective,
    DraggablePathRDirective,
    DraggablePathRtDirective,
    DraggablePathTDirective,
    DraggablePathLtDirective,
    DraggablePathLDirective,
    DraggablePathLbDirective,
    DraggablePathBDirective,
    DraggablePathRbDirective,
    EditableTextDirective,
    ClassClassnameDirective,
    ClassMethodDirective,
    ClassFieldDirective,
    ImplemetsRDirective,
    ImplemetsRtDirective,
    ImplemetsTDirective,
    ImplemetsLtDirective,
    ImplemetsLDirective,
    ImplemetsLbDirective,
    ImplemetsBDirective,
    ImplemetsRbDirective,
    DependencyRDirective,
    DependencyRtDirective,
    DependencyTDirective,
    DependencyLtDirective,
    DependencyLDirective,
    DependencyLbDirective,
    DependencyBDirective,
    DependencyRbDirective,
    CompositionRDirective,
    CompositionRtDirective,
    CompositionTDirective,
    CompositionLtDirective,
    CompositionLDirective,
    CompositionLbDirective,
    CompositionBDirective,
    CompositionRbDirective,
    AssociationRDirective,
    AssociationRtDirective,
    AssociationTDirective,
    AssociationLtDirective,
    AssociationLDirective,
    AssociationLbDirective,
    AssociationBDirective,
    AssociationRbDirective,
    AggregationRDirective,
    AggregationRtDirective,
    AggregationTDirective,
    AggregationLtDirective,
    AggregationLDirective,
    AggregationLbDirective,
    AggregationBDirective,
    AggregationRbDirective,
    MoveableDraggableDirective,
    HomeComponent,
    DocsComponent,
    DiagramChoiceComponent,
    DiagramMenuComponent,
    UmlSequenceComponentsComponent,
    LifelineDirective,
    ActivationDirective,
    FragmentDirective,
    MessageSynchronousDirective,
    MessageInternalBDirective,
    MessageInternalTDirective,
    UmlUseCasesComponentsComponent,
    LineRDirective,
    LineRtDirective,
    LineTDirective,
    UmlComponentsElementsComponent,
    UmlDeploymentElementsComponent,
    ComponentDirective,
    InterfaceRDirective,
    InterfaceRtDirective,
    InterfaceTDirective,
    InterfaceLtDirective,
    InterfaceLDirective,
    InterfaceLbDirective,
    InterfaceBDirective,
    InterfaceRbDirective,
    RequiredRDirective,
    RequiredRtDirective,
    RequiredTDirective,
    RequiredLtDirective,
    RequiredLDirective,
    RequiredLbDirective,
    RequiredBDirective,
    RequiredRbDirective,
    NodeDirective,
    ArtifactDirective,
    AuthSaveComponent,
    AuthLoadComponent,
    LoadedTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    DragDropModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
