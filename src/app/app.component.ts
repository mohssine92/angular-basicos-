import { Component } from '@angular/core';  /* => tenemos importacion del decorador Componente viene de angular\core - el decorador component tiene varias propiedades internas  */

/* este decorador cuando esta vacio requiere un argumento , sabemos que un argumento es un objeto  */
@Component({ /* nosotros vamos a especificar dos argumentos  */

 selector: 'app-root',     /* le asignamos el nombre que va tener este componente  */
 templateUrl: 'app.component.html',    /* donde especificamos el path donde se encuentra el archivo de html que va ser utulizado para este componente  */
 styleUrls: ['app.component.css']
 /*  template: `
     <h1>Hola de nuevo</h1>
     <p>se puede trabajar html desde este arguente , pero nosotros vamos a atrabajar apuntando a a url de html </p>




   `, */ /* lo que que  esta colocado aqui en etiquetas html sale en vista , y se ignora app.component.html en este componente  */

})
export class AppComponent {




}


/* => es una simple clase que tiene un decador  */
/* => ese decordaor es importado de angular/core */

/* recuerda que esta clase de este archivo esta instanciada en el archivo app.component.html  */
