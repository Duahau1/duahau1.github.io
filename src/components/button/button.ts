import { Component, HostListener } from '@angular/core'
import { ThemeService } from '../../services/theme.service'

@Component({
  selector: 'nephos-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class NephosButton {
  @HostListener('click')
  public onClickHandler() {
    const selectedTheme =
      this.themeService.getTheme() === 'green' ? 'light' : 'green'
    this.themeService.setTheme(selectedTheme)
  }

  constructor(public themeService: ThemeService) {}
}
