import { Component } from '@angular/core'
import { NephosPageModule } from '../../../components/page/page.module'

@Component({
  selector: 'nephos-home',
  standalone: true,
  imports: [NephosPageModule],
  templateUrl: './home.component.html',
  styleUrl: './home.scss',
})
export class HomePage {
  public x = 10
}
