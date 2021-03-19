import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; /* relacionado de algo => estamos trabajando en navigador web  */

import { AppComponent } from './app.component';  /* ==> el appComponent podia mentalizarme que es mi aplication en general => es un componente principal , estamos usando lo que se reconece desestructuracion de objetos  */
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';




@NgModule({ /* NgModul simplemente es el decorador que transforma simple clases a claseModul */  /* este decorador recibe informacion ,  */
  declarations: [  /* - esta parte de los modulos podemos verle como un agrupador , declaration es usalmente donde vamos a colocar componentes que vamos creando   */
    AppComponent,   /* => despues de importar esta class-de-este-componente , la colocamos aqui , porque ? . aqui declaramos los componentes que estamos utulizando en este modulo , asi entendemos si no declaramos un componente en este modulo no va a
                         a funccionar al momento de compilar . */
    ContadorComponent,
    HeroeComponent


  ],
  imports: [  /* esta parte donde vamos a colocar otros modulos  */ /* recuerda que los componentes y modulos son simplementes clases , solo el decorador quien identificas si la clase sera componente o modulo  */
     BrowserModule,


  ],
  providers: [], /* los providers son como servicios especificos a un modulo , bueno aqui van las clases providers  */
  bootstrap: [AppComponent] /* appComponent es componente principal es el componente que quiero lanzar primero  */
})
export class AppModule { } /* recuerda casi todo en angular son clases , asique @NgModule es un decorador que transforma esta simple clase a una claseModul   */

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
