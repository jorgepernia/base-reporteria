import { NgModule } from '@angular/core';



import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
    ],
})
export class SharedModule { }

