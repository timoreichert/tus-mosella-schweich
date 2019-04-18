import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VereinPage } from './verein.page';

describe('VereinPage', () => {
  let component: VereinPage;
  let fixture: ComponentFixture<VereinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VereinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VereinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
