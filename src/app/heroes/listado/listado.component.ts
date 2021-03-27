/* Conmado de angular cli para  generar componente  => ng g c heroes/listado  */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

   google: string[] = ['casa','rabat','benni mellal'];

  constructor() {
      console.log("constructor");

  }

  ngOnInit(): void {

    console.log(this.google);

  } /* usualmente se usa para inicial cosa , por ejemplo hacer peticion a algun Servicio y se trae la informacion pues aqui se hace esta parte , asi el componente se inicia con la iformacion  */


}
