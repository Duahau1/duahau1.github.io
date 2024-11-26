import { Component } from '@angular/core'
import { NephosPageModule } from '../../../components/page/page.module'

@Component({
  selector: 'nephos-contact',
  standalone: true,
  imports: [NephosPageModule],
  templateUrl: './contact.component.html',
})
export class ContactPage {
  public x = 10
}
