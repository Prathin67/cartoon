import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtoonworldComponent } from './crtoonworld.component';

describe('CrtoonworldComponent', () => {
  let component: CrtoonworldComponent;
  let fixture: ComponentFixture<CrtoonworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrtoonworldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrtoonworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
