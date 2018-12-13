import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuManagersPage } from './menu-managers.page';

describe('MenuManagersPage', () => {
  let component: MenuManagersPage;
  let fixture: ComponentFixture<MenuManagersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuManagersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuManagersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
