import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { CreateClientComponent } from './Feature/create-client/create-client.component';
import { HeaderComponent } from './Feature/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AffichageClientsComponent } from './Feature/affichage-clients/affichage-clients.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    HeaderComponent,
    AffichageClientsComponent,
    
  ],

  imports: [
    BrowserModule,
    FormsModule,
HttpClientModule,
AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
