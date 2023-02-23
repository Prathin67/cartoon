import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutbeComponent } from './youtbe.component';

describe('YoutbeComponent', () => {
  let component: YoutbeComponent;
  let fixture: ComponentFixture<YoutbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutbeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
