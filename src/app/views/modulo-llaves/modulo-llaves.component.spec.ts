import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloLlavesComponent } from './modulo-llaves.component';

describe('ModuloLlavesComponent', () => {
  let component: ModuloLlavesComponent;
  let fixture: ComponentFixture<ModuloLlavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloLlavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloLlavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
