import { Routes } from '@angular/router'
import { ContactPage } from './pages/contact/contact.component'
import { HomePage } from './pages/home/home.component'

export const routes: Routes = [
  { path: 'contact', component: ContactPage, pathMatch: 'full' },
  { path: '', component: HomePage },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
]
