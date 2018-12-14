import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadasPublicationsPage } from './jornadas-publications.page';

describe('JornadasPublicationsPage', () => {
  let component: JornadasPublicationsPage;
  let fixture: ComponentFixture<JornadasPublicationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JornadasPublicationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JornadasPublicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
