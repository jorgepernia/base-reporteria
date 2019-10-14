import { Component, OnInit } from '@angular/core';
//Services Global
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public _gS: GlobalService) { }

  isActive: boolean = true;

  ngOnInit() {
  }

}
