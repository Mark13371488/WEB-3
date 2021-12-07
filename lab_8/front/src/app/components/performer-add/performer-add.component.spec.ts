import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformerAddComponent } from './performer-add.component';

describe('PerformerAddComponent', () => {
  let component: PerformerAddComponent;
  let fixture: ComponentFixture<PerformerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
