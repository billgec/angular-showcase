import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  template: `
    <h2>Seite nicht gefunden</h2>
    <p>Zurück zur <a routerLink="/">Übersicht</a></p>
  `,
})
export class NotFoundPage {}
