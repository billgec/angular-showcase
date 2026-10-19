import { Type } from '@angular/core';

export interface ShowcasePage {
  /** Route path, e.g. "layout/formulare" */
  path: string;
  /** Label shown in the navigation */
  label: string;
  /** Navigation group, e.g. "Layout" */
  group: string;
  /** Lazily loaded page component */
  loadComponent: () => Promise<Type<unknown>>;
}

// Register every showcase page here; routes and navigation are generated from this list.
export const showcasePages: ShowcasePage[] = [];
