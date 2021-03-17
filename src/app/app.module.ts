import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';  /* ==> el appComponent podia mentalizarme que es mi aplication en general  */

@NgModule({  /* => aqui estaria los modulos que componen la misma  */
  declarations: [
    AppComponent    /* modulos de productos - modulos de clientes - modulos de autenticacion - esta parte de los modulos podemos verle como un agrupador  */
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* es una clase normal como cualquier clase pero tiene un decorador especial */

/* Los modulos permiten agrupar todo lo que hemos hablado => componente - rutas - dirtectivas - servicios  */

/* ejemplo de unos modulos para  =>
 - Modulos de Productos  : las pantallas para mostrar producttos
- Modulos de clientes :
- Modulos de de autenticacion : aqui estaria todo relacionado a la autenticacion de mi aplicacion
- Modulos de Proveedores
  Example : un calendario , hay componentes hechos para utulizar en el proyecto para mostarr un calendario => si lo que necesito ya existe en agular , problemente va ser un Modulo que vamos a descargar . asi el modulo desacargado lo vamos a incorporar a
            otro modulo de mi aplicacion y ya tenemos todas la funcionalidades listas . - pude usar libreria escritas en js no es neceseriamente usamos librerias escritas en angular ,
*/
