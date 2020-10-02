import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOrangeComponent } from './home-orange.component';

describe('HomeOrangeComponent', () => {
  let component: HomeOrangeComponent;
  let fixture: ComponentFixture<HomeOrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
