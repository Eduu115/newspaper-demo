import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesNoticia } from './detalles-noticia';

describe('DetallesNoticia', () => {
  let component: DetallesNoticia;
  let fixture: ComponentFixture<DetallesNoticia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesNoticia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesNoticia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
