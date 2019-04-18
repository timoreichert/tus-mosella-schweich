import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbteilungPage } from './abteilung.page';

describe('AbteilungPage', () => {
  let component: AbteilungPage;
  let fixture: ComponentFixture<AbteilungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbteilungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbteilungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
