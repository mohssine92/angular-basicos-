import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';





@NgModule({
  declarations:[   /* Modulos es un llevo de kinderbueno => todo los component que definimos en este modul estan invisibles para toda la application  estan dentro del llevo de chocolate   */
     HeroeComponent,
     ListadoComponent

  ],
  exports:[  /* exports segnifica que componente quiero sacar del llevo de kinderbueno que ? componente quiero poner publico para la aplicacion , sea vesible fuera de este module  */
    ListadoComponent,
    HeroeComponent

  ],
  imports:[  /* aqui dentro van modulos usualmente , los modulos son objetos que se colocan en los imports , ver en app.module.ts (module principal) , encontramos BrowserModule este no hay que volver a importarlo  */
      CommonModule /* => ofrece a este modulo directivas como ngif y entre otras cosas  */


  ]

})
export class HeroesModule {}

/* Lo bueno de trabajar con modulos es organizacion en la aplicacion en que trabajamos sea mantenible , y tambien no olvidamos si occupamos algunos modulos de esta aplicacion en otra aplicacion , sera muy facil la mudacion de un modulos creado en esta aplicacion
   a otra aplicacion   asi es hay muchas razones por las cual trabajar con modulos */
