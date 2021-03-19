import { Component } from "@angular/core";




@Component({
   selector: 'app-heroe',
   templateUrl: 'heroe.component.html',


})
export class HeroeComponent{
   nombre: string = 'Iroman';
   edad: number = 45

   obtenerNombre(): string {
      return `${ this.nombre } - ${ this.edad }`;

   }

   /* crear un get es basicamente crearme una propiedad cuando yo la llame va ser procesada igual , pero se va ver como una propiedad igual que nombre y edad  */
   get nombreCapitalizado(): string{
      return this.nombre.toUpperCase();
   }





}


/*  este componente tenemos que importarlo en un modulo paraque funccione - actualmente el unico modulo que tenemos app.Modul , pues lo importamos alli  */
