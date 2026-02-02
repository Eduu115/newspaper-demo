import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collapse } from './collapse';

describe('Collapse', () => {
  let component: Collapse;
  let fixture: ComponentFixture<Collapse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Collapse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Collapse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
