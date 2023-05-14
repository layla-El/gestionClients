import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AffichageClientsComponent } from './Feature/affichage-clients/affichage-clients.component';
import { CreateClientComponent } from './Feature/create-client/create-client.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/Clients', pathMatch: 'full'
  },
  {
    path: 'Clients', component: AffichageClientsComponent
  },
  {
    path: 'Nouveau', component: CreateClientComponent
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
