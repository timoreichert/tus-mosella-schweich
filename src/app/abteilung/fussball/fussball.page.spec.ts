import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FussballPage } from './fussball.page';

describe('FussballPage', () => {
  let component: FussballPage;
  let fixture: ComponentFixture<FussballPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FussballPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FussballPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
