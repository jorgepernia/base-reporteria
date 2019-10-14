import { NgModule } from '@angular/core';
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
import { GraphTareasProfeComponent } from './graph-tareas-profe/graph-tareas-profe.component';
import { GraphCursoBarComponent } from './graph-curso-bar/graph-curso-bar.component';
import { GraphDesempenoProfeComponent } from './graph-desempeno-profe/graph-desempeno-profe.component';
import { GraphNivelUsoCursoComponent } from './graph-nivel-uso-curso/graph-nivel-uso-curso.component';

@NgModule({
    imports: [
        ChartModule,
        AccumulationChartModule
    ],
    exports: [
        GraphDesempenoComponent,
        GraphProfeComponent,
        GraphProfeBarComponent,
        GraphNivelUsoComponent,
        GraphTareasComponent,
        GraphTareasProfeComponent,
        GraphCursoBarComponent,
        GraphDesempenoProfeComponent,
        GraphNivelUsoCursoComponent
    ],
    declarations: [
        GraphDesempenoComponent,
        GraphProfeComponent,
        GraphProfeBarComponent,
        GraphNivelUsoComponent,
        GraphTareasComponent,
        GraphTareasProfeComponent,
        GraphCursoBarComponent,
        GraphDesempenoProfeComponent,
        GraphNivelUsoCursoComponent
    ],
    providers: [CategoryService, BarSeriesService, ColumnSeriesService, LineSeriesService, LegendService, DataLabelService, MultiLevelLabelService, SelectionService, TooltipService, PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService, AccumulationDataLabelService]
})
export class ComponenetsModule { }
