import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerzsportPage } from './herzsport.page';

describe('HerzsportPage', () => {
  let component: HerzsportPage;
  let fixture: ComponentFixture<HerzsportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerzsportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerzsportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
