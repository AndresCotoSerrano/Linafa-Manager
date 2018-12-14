import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadasCategoryPage } from './jornadas-category.page';

describe('JornadasCategoryPage', () => {
  let component: JornadasCategoryPage;
  let fixture: ComponentFixture<JornadasCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JornadasCategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JornadasCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
