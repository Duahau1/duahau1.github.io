import { Component, HostBinding, Input } from '@angular/core'
import _ from 'lodash-es'
import { Position } from '../../app/app.model'
@Component({
  selector: 'nephos-page-header',
  standalone: false,
  template: '<span><ng-content></ng-content></span>',
  styles: [':host {width:100%; height :100%;}'],
})
export class NephosPageHeader {}
@Component({
  selector: 'nephos-page-content',
  standalone: false,
  template: '<span><ng-content></ng-content></span>',
  styles: [':host {width:100%; height :100%;}'],
})
export class NephosPageContent {}

@Component({
  selector: 'nephos-page',
  templateUrl: './page.html',
  styleUrl: './page.scss',
  standalone: false,
})
export class NephosPage {
  @HostBinding('class')
  public get class() {
    return this.getPositions()
  }

  @Input() public alignment: Position | null = null

  public getPositions(): string {
    if (this.alignment == null) {
      return ''
    }
    return _.map(
      this.alignment,
      (value, key) => `${_.kebabCase(key)}-${value}-alignment-header`
    ).join(' ')
  }
}
