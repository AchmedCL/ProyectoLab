import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloHorariosComponent } from './modulo-horarios.component';

describe('ModuloHorariosComponent', () => {
  let component: ModuloHorariosComponent;
  let fixture: ComponentFixture<ModuloHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloHorariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
