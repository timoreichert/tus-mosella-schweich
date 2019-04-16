import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GesundheitssportPage } from './gesundheitssport.page';

describe('GesundheitssportPage', () => {
  let component: GesundheitssportPage;
  let fixture: ComponentFixture<GesundheitssportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesundheitssportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GesundheitssportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
