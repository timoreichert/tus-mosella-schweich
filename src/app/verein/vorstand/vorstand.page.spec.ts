import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VorstandPage } from './vorstand.page';

describe('VorstandPage', () => {
  let component: VorstandPage;
  let fixture: ComponentFixture<VorstandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VorstandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VorstandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
