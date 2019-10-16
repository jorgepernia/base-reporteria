import { Component, OnInit } from '@angular/core';

interface Profe {
  NOMBREPROFE: string;
  CAPACITADO: number;
}

const PROFESORAS: Profe[] = [
  {
    NOMBREPROFE: 'Maria Gonzalez',
    CAPACITADO: 50,
  },
  {
    NOMBREPROFE: 'Valentina Frei',
    CAPACITADO: 20,
  },
];


@Component({
  selector: 'app-tabla-capacitacion',
  templateUrl: './tabla-capacitacion.component.html',
  styleUrls: ['./tabla-capacitacion.component.css']
})
export class TablaCapacitacionComponent implements OnInit {

  CapProfe = PROFESORAS;

  constructor() { }

  ngOnInit() {
  }

}
