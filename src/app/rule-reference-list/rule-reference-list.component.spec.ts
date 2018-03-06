import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleReferenceListComponent } from './rule-reference-list.component';

describe('RuleReferenceListComponent', () => {
  let component: RuleReferenceListComponent;
  let fixture: ComponentFixture<RuleReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
