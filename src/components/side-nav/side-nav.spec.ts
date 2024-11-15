import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NephosSideNav } from './side-nav'

describe('SideNavComponent', () => {
  let component: NephosSideNav
  let fixture: ComponentFixture<NephosSideNav>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NephosSideNav],
    }).compileComponents()

    fixture = TestBed.createComponent(NephosSideNav)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
