import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { ViagensComponent } from './pages/viagens/viagens.component';
import { ContatoComponent } from './pages/contato/contato.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sobrenos', component: SobrenosComponent },
  { path: 'viagens', component: ViagensComponent },
  { path: 'contato', component: ContatoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
