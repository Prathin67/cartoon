import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulldtaComponent } from './fulldta.component';

describe('FulldtaComponent', () => {
  let component: FulldtaComponent;
  let fixture: ComponentFixture<FulldtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulldtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FulldtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
