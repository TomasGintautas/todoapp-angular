import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceTodayComponent } from './workspace-today.component';

describe('WorkspaceTodayComponent', () => {
  let component: WorkspaceTodayComponent;
  let fixture: ComponentFixture<WorkspaceTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
