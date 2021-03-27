/* Conmado de angular cli para  generar componente  => ng g c heroes/listado  */
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan america'];
  heroeBorrado: string = '';


  borrarHeroe(){

     console.log('shift borra y returna el borardo que interesante ');
     this.heroeBorrado = this.heroes.shift() || '';



  }




}
