import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkhourformComponent } from './workhourform.component';

describe('WorkhourformComponent', () => {
  let component: WorkhourformComponent;
  let fixture: ComponentFixture<WorkhourformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkhourformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkhourformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
