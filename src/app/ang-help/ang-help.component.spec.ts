import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngHelpComponent } from './ang-help.component';

describe('AngHelpComponent', () => {
  let component: AngHelpComponent;
  let fixture: ComponentFixture<AngHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
