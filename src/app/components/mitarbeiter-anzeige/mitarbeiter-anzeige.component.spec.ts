/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MitarbeiterAnzeigeComponent } from './mitarbeiter-anzeige.component';

describe('MitarbeiterAnzeigeComponent', () => {
  let component: MitarbeiterAnzeigeComponent;
  let fixture: ComponentFixture<MitarbeiterAnzeigeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitarbeiterAnzeigeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitarbeiterAnzeigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
