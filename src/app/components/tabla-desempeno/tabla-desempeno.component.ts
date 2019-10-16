import { Component, OnInit } from '@angular/core';

interface DataDesempeno {
  CURSO: string;
  OA: number;
  IE: number;
  PROFESOR: string;
  CC: number;
}

const DESEMPENO: DataDesempeno[] = [
  {
    CURSO: '4A',
    OA: 5,
    IE: 15,
    PROFESOR: 'Maria Gonzalez',
    CC: 55,
  },
  {
    CURSO: '4B',
    OA: 10,
    IE: 45,
    PROFESOR: 'Valentina Frei',
    CC: 80,
  },
  {
    CURSO: '4C',
    OA: 6,
    IE: 18,
    PROFESOR: 'Maria Gonzalez',
    CC: 60,
  },
];

@Component({
  selector: 'app-tabla-desempeno',
  templateUrl: './tabla-desempeno.component.html',
  styleUrls: ['./tabla-desempeno.component.css']
})
export class TablaDesempenoComponent implements OnInit {

  desempenoCursos = DESEMPENO;


  constructor() { }

  ngOnInit() {

  }

}
