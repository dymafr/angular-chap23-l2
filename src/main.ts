import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js'; // Nécessaire uniquement pour Stackblitz
import { AppModule } from './app/app.module.ts';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
