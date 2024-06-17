import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KajalComponent } from './kajal.component';

describe('KajalComponent', () => {
  let component: KajalComponent;
  let fixture: ComponentFixture<KajalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KajalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KajalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
