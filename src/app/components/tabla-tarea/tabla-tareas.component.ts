import { Component, OnInit } from '@angular/core';

interface Tarea {
  TAREALAB: number;
  TAREAHOG: number;
  CURSO: string;
}

const TAREAS: Tarea[] = [
  {
    TAREALAB: 15,
    TAREAHOG: 10,
    CURSO: '4A',
  },
  {
    TAREALAB: 15,
    TAREAHOG: 10,
    CURSO: '4B',
  },
  {
    TAREALAB: 15,
    TAREAHOG: 10,
    CURSO: '4C',
  },
];

@Component({
  selector: 'app-tabla-tareas',
  templateUrl: './tabla-tareas.component.html',
  styleUrls: ['./tabla-tareas.component.css']
})
export class TablaTareasComponent implements OnInit {

  tareasTipo = TAREAS;

  constructor() { }

  ngOnInit() {

  }

}
