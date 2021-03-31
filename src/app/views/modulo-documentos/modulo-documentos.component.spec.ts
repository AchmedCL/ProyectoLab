import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloDocumentosComponent } from './modulo-documentos.component';

describe('ModuloDocumentosComponent', () => {
  let component: ModuloDocumentosComponent;
  let fixture: ComponentFixture<ModuloDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloDocumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
