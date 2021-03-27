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

   /* crear un get es basicamente crearme una propiedad cuando yo la llame va ser procesada, pero se va ver como una propiedad igual que nombre y edad  - Noten no es un metodo es un getter segnifica en tamplate sera llamada como propiedad no como metodo */
   get nombreCapitalizado() {
      return this.nombre.toUpperCase();
   }

   cambiarNombre():void{
      this.nombre = 'Spiderman';
   }
   cambiarEdad():void{
    this.edad = 35;
  }



}



