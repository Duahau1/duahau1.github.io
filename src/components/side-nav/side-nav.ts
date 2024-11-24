import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { RouteConfigType } from '../../app/app.model'

@Component({
  selector: 'nephos-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './side-nav.html',
  styleUrls: ['side-nav.scss'],
})
export class NephosNav {
  @Input() public routeConfig: RouteConfigType[] = []
}
