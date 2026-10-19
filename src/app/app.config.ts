import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { provideDateFnsAdapter } from '@angular/material-date-fns-adapter';
import { provideRouter } from '@angular/router';
import { de } from 'date-fns/locale';

import { routes } from './app.routes';

registerLocaleData(localeDe);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // German number/date pipes; date pickers parse and display dd.MM.yyyy, week starts on Monday.
    { provide: LOCALE_ID, useValue: 'de' },
    { provide: MAT_DATE_LOCALE, useValue: de },
    provideDateFnsAdapter(),
  ],
};
