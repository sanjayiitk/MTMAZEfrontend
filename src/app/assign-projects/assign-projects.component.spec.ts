import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProjectsComponent } from './assign-project.component';

describe('AssignProjectsComponent', () => {
  let component: AssignProjectsComponent;
  let fixture: ComponentFixture<AssignProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
