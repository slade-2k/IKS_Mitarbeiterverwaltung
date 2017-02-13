/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MitarbeiterListeComponent } from './mitarbeiter-liste.component';

describe('MitarbeiterListeComponent', () => {
  let component: MitarbeiterListeComponent;
  let fixture: ComponentFixture<MitarbeiterListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitarbeiterListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitarbeiterListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
