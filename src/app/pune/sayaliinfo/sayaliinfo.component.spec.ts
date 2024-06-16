import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayaliinfoComponent } from './sayaliinfo.component';

describe('SayaliinfoComponent', () => {
  let component: SayaliinfoComponent;
  let fixture: ComponentFixture<SayaliinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SayaliinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SayaliinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
