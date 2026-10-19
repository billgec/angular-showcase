import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, inject, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListSubheaderCssMatStyler, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';

import { ShowcasePage, showcasePages } from '../../showcase/pages';

const groups = showcasePages.reduce((acc, page) => {
  acc.set(page.group, [...(acc.get(page.group) ?? []), page]);
  return acc;
}, new Map<string, ShowcasePage[]>());

@Component({
  selector: 'app-shell',
  imports: [
    MatIcon,
    MatIconButton,
    MatListItem,
    MatListSubheaderCssMatStyler,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {
  protected readonly groups = [...groups];
  protected readonly isMobile = toSignal(
    inject(BreakpointObserver)
      .observe('(max-width: 767.98px)')
      .pipe(map((state) => state.matches)),
    { initialValue: false },
  );

  private readonly sidenav = viewChild.required(MatSidenav);

  protected closeOnMobile(): void {
    if (this.isMobile()) {
      this.sidenav().close();
    }
  }
}
