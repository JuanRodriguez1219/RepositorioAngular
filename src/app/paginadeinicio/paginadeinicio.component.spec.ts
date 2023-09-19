import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadeinicioComponent } from './paginadeinicio.component';

describe('PaginadeinicioComponent', () => {
  let component: PaginadeinicioComponent;
  let fixture: ComponentFixture<PaginadeinicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginadeinicioComponent]
    });
    fixture = TestBed.createComponent(PaginadeinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
