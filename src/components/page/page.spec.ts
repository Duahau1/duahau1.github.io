import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NephosPage } from './page'

describe('PageComponent', () => {
  let component: NephosPage
  let fixture: ComponentFixture<NephosPage>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NephosPage],
    }).compileComponents()

    fixture = TestBed.createComponent(NephosPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
