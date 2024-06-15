import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkshadainfoComponent } from './akshadainfo.component';

describe('AkshadainfoComponent', () => {
  let component: AkshadainfoComponent;
  let fixture: ComponentFixture<AkshadainfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AkshadainfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkshadainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



