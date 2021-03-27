import { NgModule } from '@angular/core';  /* desestructuramos la funccion de que decora clase convertirla en class modul */
import { BrowserModule } from '@angular/platform-browser';   /* modul trata tema de que la aplicacion se ejecuta en navifgador web   */

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';




@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent

  ],
  imports: [
     BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
