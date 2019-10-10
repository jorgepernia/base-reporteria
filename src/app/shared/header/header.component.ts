import { Component, OnInit } from '@angular/core';

import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public _gS: GlobalService) { }

  ngOnInit() {
  }

}
