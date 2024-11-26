import { Routes } from '@angular/router'
import { AboutPage } from './pages/about/about'
import { ContactPage } from './pages/contact/contact.component'
import { HomePage } from './pages/home/home.component'

export const routes: Routes = [
  { path: 'contact', component: ContactPage, pathMatch: 'full' },
  { path: 'about', component: AboutPage, pathMatch: 'full' },
  { path: '', component: HomePage },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
]
