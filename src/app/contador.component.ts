import { Component } from "@angular/core";  /*  @angular/core => es un paquete , extraemos de esta paquete la interfaz component  usamos la desestructuracion de objeto , porque hay muchas cosas en esta paquete ,  */
                                            /* Component es un decorador */





@Component({
  selector: 'app-contador',
  styleUrls: ['app.component.css'],
  template: `

     <h2>{{ title }}</h2>
     <h3>La base es : <strong>{{ base }}</strong></h3>

     <button (click)="acumular(base)"> +{{ base }}</button>

     <span>{{ numero }}</span>

     <button (click)="acumular(-base)" > -{{ base }}</button>

  `  /* todo html de este ContadorComponent va ser aqui , en este caso evitamos crear archivo template html para esta componente  */
})
export class ContadorComponent {
   title : string = 'Contador App ';
   numero: number = 10;
   base  : number = 5;


  acumular(valor: number){
    this.numero += valor

  }





}
  /* ContadorComponent es una simple clase - prefijo export porque la quiero usar fuera de este archivo  */ /* ahora le añadidmos el decorador para transformar esta clase en un propio componente de angular , decorador nada mas una funccion expande la
     funcionalidades de una clase
    ,lo que es nada mas añadimos este decordor , esta simple clase tendra todas la funccionalidades para transformarse en un componente de angular    */



    /* la desestructuracion de objetos se hacen mediantes llaves {} ==>   {name , lastname, sex } = object  => name es una propiedead del objeto , asi en la siguente linea tengo acceso directo a la propiedad del objeto - en objetos la desestreuctutacion
       de hace por nombre de las propiedades del objeto . */
    /* la desestructuracion de los arrays se hacen mediante [] => ['goku','pokemos','azuz'] = dbz :array()  => en este caso lo imporatante al momento de desetructurar el orden index dbz[0] , dbz[1] .. etc asi la siguiente linea tengo acceso directo
      en array la desesctructuracion se hace por orden nombre no importa  */




    /* esto es un archivo TS =>  IMPORTANT => export , al poner export a la interface de abajo segnifica que este archivo Ts va decir a todos archivos que estoy exportando esta interfaz para uso global despues , es decir todo archivos van a poder consumir
        la interfaz siempre cuando lo importa el archivo => Importante => al momento de imporatr notamos que la sintaxis de importancion usa desesetructuracion de objetos eso quiere decir que el archivo donde se encuentra interfaz se considera como un objeto,
        es decir todas las funcciones etc estan dentro de un archivo considerado como objeto , asi al momento de importar usamos llaves para desestrusctura seleccionando la propiedad del archivo que nos instereza en este caso es la interfaz
        asi consideremos archivo es objeto . las funcciones y interfaces son propiedades del objetoarchivo , asi cuamdo importamos desestructuramos entre llaves la propiedad que necesitamos , porsupuesto sera una intefaz o una funccion porque el objeto es
        un archivo ,explicamos de otra manera el archivo exporta un objeto y ami me interesa la interfaz , asi la desestructuro , esto es todo , para acceso facil
      export interface Producto{
                  desc: string;
                  precio: number
                  }
      <--------------------------->
     */


   /* desestructuracion de argumentos =>

    interface Producto{
      desc: string;
      precio: number
    }
    let telefono = {            objetc
      desc : 'nokia a1',
      total: 150
    }
    let tablete = {          object
      desc: 'Nokia A1',
      precio: 150

    }


    function calculaISV( Prudoctos : Product[] ):number{

      let total = 0;

       productos.foreach((producto) => {
          total +=producto.precio;
       })
       return total * 0.15;

    }

    const articulos = [telefono, tablete];
    const isv = calculaISV( articulos );


    ==> desustructuracion de argumento

    function calculaISV( Prudoctos : Product[] ):number{

     productos.foreach( {precio} )=>{     sensillo a la hora de escribir el argumento abrrimos llaves y buscamos la propiedad dentro de al argumento es todo

      total += precio;

    })

     return total * 0.15;   opcion 1  regreso una sola propiedad

    }

    const articulos = [telefono, tablete];
    const isv = calculaISV( articulos );


    en esta opcion quiero regresar un array
     function calculaISV( Prudoctos : Product[] ):[number, number]{

     productos.foreach( {precio} )=>{     sensillo a la hora de escribir el argumento abrrimos llaves y buscamos la propiedad dentro de al argumento es todo

      total += precio;

    })

     return [total,total * 0.15];

    }

    const articulos = [telefono, tablete];

    const isv = calculaISV( articulos );  me returna un array asi puedo aplicar una desestructuracion al retornado ==>    const[ total,isv ] = calculaISV( articulos );


    */

     /* esto es un archivo TS =>  */
