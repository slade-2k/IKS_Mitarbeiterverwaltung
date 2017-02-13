import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MitarbeiterListeComponent } from './components/mitarbeiter-liste/mitarbeiter-liste.component';
import { MitarbeiterFormularComponent } from './components/mitarbeiter-formular/mitarbeiter-formular.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MitarbeiterService } from './services/mitarbeiter.service';

const appRoutes: Routes = [
  { path: '', component: MitarbeiterListeComponent },
  { path: 'anlegen', component: MitarbeiterFormularComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MitarbeiterListeComponent,
    MitarbeiterFormularComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MitarbeiterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
