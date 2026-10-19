import { Type } from '@angular/core';

export interface ShowcasePage {
  /** Route path, e.g. "layout/formulare" */
  path: string;
  /** Label shown in the navigation */
  label: string;
  /** Navigation group, e.g. "Layout" */
  group: string;
  /** Lazily loaded page component; pages without one show a placeholder */
  loadComponent?: () => Promise<Type<unknown>>;
}

// Register every showcase page here; routes and navigation are generated from this list.
// Order and grouping follow the menu of the original JSF showcase.
export const showcasePages: ShowcasePage[] = [
  { group: 'Building Blocks', label: 'Dialog-Templates', path: 'building-blocks/dialog-templates' },

  { group: 'Anwendung', label: 'Correlation-ID', path: 'anwendung/correlation-id' },

  { group: 'Authentifizierung', label: 'JAX-RS Client', path: 'auth/simple-jaxrs' },
  { group: 'Authentifizierung', label: 'RESTeasy', path: 'auth/simple-resteasy' },

  { group: 'Persistenz', label: 'Basisobjekte', path: 'persistenz/basisobjekte' },
  { group: 'Persistenz', label: 'Typ-Mappings', path: 'persistenz/typmappings' },

  { group: 'Validierungen', label: 'Pflichtfelder & BV', path: 'validierungen/pflichtfelder' },
  {
    group: 'Validierungen',
    label: 'Allgemeine Validierungen',
    path: 'validierungen/common-validation',
  },

  { group: 'Layout', label: 'Aktionen', path: 'layout/aktionen' },
  { group: 'Layout', label: 'Confirm Dialog', path: 'layout/confirmdialog' },
  { group: 'Layout', label: 'Container', path: 'layout/container' },
  { group: 'Layout', label: 'Fileupload', path: 'layout/fileupload' },
  { group: 'Layout', label: 'Formulare', path: 'layout/formulare' },
  { group: 'Layout', label: 'Grunddaten', path: 'layout/grunddaten' },
  { group: 'Layout', label: 'Kontexthilfe', path: 'layout/kontexthilfe' },
  { group: 'Layout', label: 'Meldungen', path: 'layout/meldungen' },
  { group: 'Layout', label: 'Prozess-Template', path: 'layout/prozess-template' },
  { group: 'Layout', label: 'Prozess-Navigation (alt)', path: 'layout/prozess-navigation' },
  { group: 'Layout', label: 'Tabellen', path: 'layout/tabellen' },
  { group: 'Layout', label: 'Toolbars', path: 'layout/toolbars' },
  { group: 'Layout', label: 'UI-Elemente', path: 'layout/uielemente' },

  { group: 'Adressen', label: 'Adressen', path: 'adressen/adressen' },
  { group: 'Adressen', label: 'Nationen', path: 'adressen/nationen' },
  { group: 'Adressen', label: 'IBAN, BIC', path: 'adressen/iban' },

  { group: 'Jakarta EE', label: 'Scopes', path: 'jakartaee/scopes' },

  { group: 'Flows', label: 'Erfassen-Flow', path: 'flows/erfassen' },
];
