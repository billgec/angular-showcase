import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-placeholder-page',
  template: `
    <h2>{{ label() }}</h2>
    <p>Noch nicht umgesetzt.</p>
  `,
})
export class PlaceholderPage {
  protected readonly label = toSignal(
    inject(ActivatedRoute).data.pipe(map((data) => data['label'] as string)),
  );
}
