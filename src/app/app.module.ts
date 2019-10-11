import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';

//Services
import { GlobalService } from 'src/app/services/global.service';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Modulos Page
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { ComponenetsModule } from './components/components.module';

//Login Page
import { LoginComponent } from './login/login.component';

//page 404
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenofoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    ComponenetsModule,
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
