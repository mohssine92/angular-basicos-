/* este es el modulo princiapl esta declarado en el main.ts  */

import { NgModule } from '@angular/core';  /* desestructuramos la funccion de que decora clase convertirla en class modul */
import { BrowserModule } from '@angular/platform-browser';   /* modul trata tema de que la aplicacion se ejecuta en navifgador web   */

import { AppComponent } from './app.component';



/* Modules importation Personal   */

/* cuando estamos treabajando en algo de heroes los hacemos directamente del modulo de heroes ya no tocamos nada mas en el modulo principal , asi vamos creando modulo para autenticacion - modulo para productos etc ... */
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';






@NgModule({
  declarations: [
    AppComponent,           /* => componente principal  */
   /*ContadorComponent,*/   /* no es componente principal para mi aplicacion es decir no es alogo debe mostrarse justo cuando la aplicacion se carga , pero  es importante para mostrar algun tarea al rednderizarse  */

  ],
  imports: [
     BrowserModule,
     HeroesModule,  /* => asi todos componentes declarados en exports en este modul es decir publicas para la app , puedan ser renderizadas en el componente principal si fallo  */
     ContadorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* Ej :  modulo productos tiene 100 componentes , la idea de lasi load = > para que ? cargamos el modulo de productos con 100 componentes que tiene y ... si el usuario no entra en la seccion de productos , es decir que sea cargado bajo demanda esa es la idea de
   lasi load , asi mi aplicacion sea mas rapida  */


   /* Tambien creamos otros Modulos  => porque ? fijate tenemos 100 componentes necesitamos 100 importacion y 100 declarations , este fichero este classModul crece de una manera incontrolable es decir este module creze de una manera deficil de controllar  */

