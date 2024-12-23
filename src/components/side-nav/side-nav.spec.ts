import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NephosNav } from './side-nav'

describe('SideNavComponent', () => {
  let component: NephosNav
  let fixture: ComponentFixture<NephosNav>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NephosNav],
    }).compileComponents()

    fixture = TestBed.createComponent(NephosNav)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
