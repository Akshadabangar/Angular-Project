import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakedetailsComponent } from './cakedetails.component';

describe('CakedetailsComponent', () => {
  let component: CakedetailsComponent;
  let fixture: ComponentFixture<CakedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CakedetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
