import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouuserComponent } from './thankyouuser.component';

describe('ThankyouuserComponent', () => {
  let component: ThankyouuserComponent;
  let fixture: ComponentFixture<ThankyouuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankyouuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
