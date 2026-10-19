import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from './app.routes';

describe('routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
  });

  it('renders the overview at /', async () => {
    const harness = await RouterTestingHarness.create('/');
    expect(harness.routeNativeElement?.textContent).toContain('Übersicht');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe('Angular Showcase');
  });

  it('renders a placeholder for registered pages without a component', async () => {
    const harness = await RouterTestingHarness.create('/layout/formulare');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe('Formulare');
  });

  it('renders the 404 page for unknown paths', async () => {
    const harness = await RouterTestingHarness.create('/gibt/es/nicht');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe(
      'Seite nicht gefunden',
    );
  });
});
