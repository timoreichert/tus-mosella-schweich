import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TischtennisPage } from './tischtennis.page';

describe('TischtennisPage', () => {
  let component: TischtennisPage;
  let fixture: ComponentFixture<TischtennisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TischtennisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TischtennisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
