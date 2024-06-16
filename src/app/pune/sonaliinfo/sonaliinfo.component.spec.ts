import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonaliinfoComponent } from './sonaliinfo.component';

describe('SonaliinfoComponent', () => {
  let component: SonaliinfoComponent;
  let fixture: ComponentFixture<SonaliinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SonaliinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonaliinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
