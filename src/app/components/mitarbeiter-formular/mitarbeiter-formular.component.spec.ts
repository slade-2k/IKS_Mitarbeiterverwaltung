/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MitarbeiterFormularComponent } from './mitarbeiter-formular.component';

describe('MitarbeiterFormularComponent', () => {
  let component: MitarbeiterFormularComponent;
  let fixture: ComponentFixture<MitarbeiterFormularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitarbeiterFormularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitarbeiterFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
