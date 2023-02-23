import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatfulComponent } from './datful.component';

describe('DatfulComponent', () => {
  let component: DatfulComponent;
  let fixture: ComponentFixture<DatfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
