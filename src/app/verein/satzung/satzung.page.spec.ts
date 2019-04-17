import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatzungPage } from './satzung.page';

describe('SatzungPage', () => {
  let component: SatzungPage;
  let fixture: ComponentFixture<SatzungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatzungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatzungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
