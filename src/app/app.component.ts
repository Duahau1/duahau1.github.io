import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NephosNav } from '../components/side-nav/side-nav'
import { RouteConfigType } from '../components/side-nav/side-nav.model'

@Component({
  selector: 'nephos-root',
  standalone: true,
  imports: [RouterOutlet, NephosNav, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'duahau1.github.io'
  public routeConfigs: RouteConfigType[] = [
    {
      routerLink: '/contact',
      name: 'Contact',
    },
    {
      routerLink: '/',
      name: 'Home',
    },
  ]
}
