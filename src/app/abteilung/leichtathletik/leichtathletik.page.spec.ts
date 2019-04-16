import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeichtathletikPage } from './leichtathletik.page';

describe('LeichtathletikPage', () => {
  let component: LeichtathletikPage;
  let fixture: ComponentFixture<LeichtathletikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeichtathletikPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeichtathletikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
