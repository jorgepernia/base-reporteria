import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cargandoCurso: boolean = false;
  cargandoProfe: boolean = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log('aqui', this.cargandoCurso);
      this.cargandoCurso = true;
    }, 4000);
    setTimeout(() => {
      console.log('aqui', this.cargandoProfe);
      this.cargandoProfe = true;
    }, 5000);
    console.log('aqui', this.cargandoCurso);
    console.log('aqui', this.cargandoProfe);
  }

}
