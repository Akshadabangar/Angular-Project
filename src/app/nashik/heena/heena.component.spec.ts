import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeenaComponent } from './heena.component';

describe('HeenaComponent', () => {
  let component: HeenaComponent;
  let fixture: ComponentFixture<HeenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
