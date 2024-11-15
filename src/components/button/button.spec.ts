import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NephosButton } from './button'

describe('ButtonComponent', () => {
  let component: NephosButton
  let fixture: ComponentFixture<NephosButton>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NephosButton],
    }).compileComponents()

    fixture = TestBed.createComponent(NephosButton)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
