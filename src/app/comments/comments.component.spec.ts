import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommenteComponent } from './comments.component';

describe('CommenteComponent', () => {
  let component: CommenteComponent;
  let fixture: ComponentFixture<CommenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
