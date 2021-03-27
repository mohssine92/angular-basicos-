import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';   /* este es el  unico modulo que tengo hasta ahora , es el modulo principal  */
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)  /* AppModule ==> este es el modulos principal ver video 47  */
  .catch(err => console.error(err));


  /* => este archivo no se toca , este archivo ayuda a decirle a angular el ambiente en el  que esta curriendo .   */
