import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraphDesempenoComponent } from './graph-desempeno/graph-desempeno.component';

import { ChartModule, AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import {
    CategoryService, BarSeriesService, ColumnSeriesService, LineSeriesService, LegendService, DataLabelService, MultiLevelLabelService, SelectionService, TooltipService,
    PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService, AccumulationDataLabelService
} from '@syncfusion/ej2-angular-charts';

import { GraphProfeComponent } from './graph-profe/graph-profe.component';
import { GraphProfeBarComponent } from './graph-profe-bar/graph-profe-bar.component';
import { GraphNivelUsoComponent } from './graph-nivel-uso/graph-nivel-uso.component';
import { GraphTareasComponent } from './graph-tareas/graph-tareas.component';
import { GraphCursoBarComponent } from './graph-curso-bar/graph-curso-bar.component';
import { GraphNivelUsoCursoComponent } from './graph-nivel-uso-curso/graph-nivel-uso-curso.component';

import { TablaTareasComponent } from './tabla-tarea/tabla-tareas.component';
import { TablaDesempenoComponent } from './tabla-desempeno/tabla-desempeno.component';
import { TablaCapacitacionComponent } from './tabla-capacitacion/tabla-capacitacion.component';


@NgModule({
    imports: [
        ChartModule,
        AccumulationChartModule,
        NgbModule,
        CommonModule
    ],
    exports: [
        GraphDesempenoComponent,
        GraphProfeComponent,
        GraphProfeBarComponent,
        GraphNivelUsoComponent,
        GraphTareasComponent,
        GraphCursoBarComponent,
        GraphNivelUsoCursoComponent,
        TablaDesempenoComponent,
        TablaTareasComponent,
        TablaCapacitacionComponent
    ],
    declarations: [
        GraphDesempenoComponent,
        GraphProfeComponent,
        GraphProfeBarComponent,
        GraphNivelUsoComponent,
        GraphTareasComponent,
        TablaTareasComponent,
        GraphCursoBarComponent,
        TablaDesempenoComponent,
        GraphNivelUsoCursoComponent,
        TablaCapacitacionComponent
    ],
    providers: [CategoryService, BarSeriesService, ColumnSeriesService, LineSeriesService, LegendService, DataLabelService, MultiLevelLabelService, SelectionService, TooltipService, PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService, AccumulationDataLabelService]
})
export class ComponenetsModule { }
