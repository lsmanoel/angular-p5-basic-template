import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5wrapperComponent } from './p5wrapper.component';

describe('P5wrapperComponent', () => {
  let component: P5wrapperComponent;
  let fixture: ComponentFixture<P5wrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5wrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P5wrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
