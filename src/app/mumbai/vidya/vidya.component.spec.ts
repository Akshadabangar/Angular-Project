import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidyaComponent } from './vidya.component';

describe('VidyaComponent', () => {
  let component: VidyaComponent;
  let fixture: ComponentFixture<VidyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VidyaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
