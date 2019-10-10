import { Component, OnInit } from '@angular/core';

import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(public _gS: GlobalService) { }

  ngOnInit() {
  }

}
