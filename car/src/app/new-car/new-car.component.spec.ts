import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarComponent } from './new-car.component';

describe('NewCarComponent', () => {
  let component: NewCarComponent;
  let fixture: ComponentFixture<NewCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
