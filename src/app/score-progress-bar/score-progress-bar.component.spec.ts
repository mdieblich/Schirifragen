import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreProgressBarComponent } from './score-progress-bar.component';

describe('ScoreProgressBarComponent', () => {
  let component: ScoreProgressBarComponent;
  let fixture: ComponentFixture<ScoreProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
