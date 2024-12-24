import { Component } from '@angular/core'
import { NephosPageModule } from '../../../components/page/page.module'
import { Position } from '../../app.model'

@Component({
  selector: 'nephos-contact',
  standalone: true,
  imports: [NephosPageModule],
  templateUrl: './contact.component.html',
})
export class ContactPage {
  public alignmentOptions: Position = {
    xPosition: 'center',
    yPosition: 'center',
  }
}
