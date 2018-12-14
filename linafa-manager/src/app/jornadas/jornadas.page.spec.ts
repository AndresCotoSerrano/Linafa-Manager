import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadasPage } from './jornadas.page';

describe('JornadasPage', () => {
  let component: JornadasPage;
  let fixture: ComponentFixture<JornadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JornadasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JornadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
