import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { ViagensComponent } from './pages/viagens/viagens.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SobrenosComponent,
    ViagensComponent,
    ContatoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
