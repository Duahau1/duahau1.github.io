import { CommonModule, NgClass } from '@angular/common'
import { Component, HostBinding } from '@angular/core'
import { Router, RouterModule, RouterOutlet } from '@angular/router'
import { NephosButton } from '../components/button/button'
import { NephosNav } from '../components/side-nav/side-nav'
import { ThemeService } from '../services/theme.service'
import { RouteConfigType } from './app.model'

@Component({
  selector: 'nephos-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NephosNav,
    CommonModule,
    NephosButton,
    RouterModule,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @HostBinding('class')
  public get class(): string {
    return `nephos-${this.themeService.getTheme()}-theme`
  }

  constructor(
    public themeService: ThemeService,
    public router: Router
  ) {}

  public isHomePage(): boolean {
    return this.router.url !== '/'
  }

  public title = 'duahau1.github.io'
  public routeConfigs: RouteConfigType[] = [
    {
      routerLink: '/contact',
      name: 'contact',
    },
    {
      routerLink: '/about',
      name: 'about me',
    },
    {
      routerLink: '/',
      name: 'home',
    },
  ]
}
