import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceSignificanceComponent } from './workspace-significance.component';

describe('WorkspaceSignificanceComponent', () => {
  let component: WorkspaceSignificanceComponent;
  let fixture: ComponentFixture<WorkspaceSignificanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceSignificanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceSignificanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
