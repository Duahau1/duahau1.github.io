import { NgModule } from '@angular/core'
import { NephosPage, NephosPageContent, NephosPageHeader } from './page'
@NgModule({
  declarations: [NephosPage, NephosPageHeader, NephosPageContent],
  exports: [NephosPage, NephosPageHeader, NephosPageContent],
})
export class NephosPageModule {}
