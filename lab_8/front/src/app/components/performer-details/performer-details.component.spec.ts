import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformerDetailsComponent } from './performer-details.component';

describe('PerformerDetailsComponent', () => {
  let component: PerformerDetailsComponent;
  let fixture: ComponentFixture<PerformerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
