import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedDirectivesComponent } from './predefined-directives.component';

describe('PredefinedDirectivesComponent', () => {
  let component: PredefinedDirectivesComponent;
  let fixture: ComponentFixture<PredefinedDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefinedDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefinedDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
