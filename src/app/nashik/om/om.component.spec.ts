import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmComponent } from './om.component';

describe('OmComponent', () => {
  let component: OmComponent;
  let fixture: ComponentFixture<OmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
