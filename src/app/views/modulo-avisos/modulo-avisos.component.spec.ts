import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloAvisosComponent } from './modulo-avisos.component';

describe('ModuloAvisosComponent', () => {
  let component: ModuloAvisosComponent;
  let fixture: ComponentFixture<ModuloAvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloAvisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
