import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsFilterComponent } from './cats-filter.component';

describe('CatsFilterComponent', () => {
  let component: CatsFilterComponent;
  let fixture: ComponentFixture<CatsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
