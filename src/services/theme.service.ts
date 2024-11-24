import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { SupportThemeType } from '../app/app.model'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _themeValue$ = new BehaviorSubject<SupportThemeType>('green')
  public themeValue$ = this._themeValue$.asObservable()

  public setTheme(theme: SupportThemeType) {
    this._themeValue$.next(theme)
  }

  public getTheme(): SupportThemeType {
    return this._themeValue$.value
  }
}
