import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolleyballPage } from './volleyball.page';

describe('VolleyballPage', () => {
  let component: VolleyballPage;
  let fixture: ComponentFixture<VolleyballPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolleyballPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolleyballPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
