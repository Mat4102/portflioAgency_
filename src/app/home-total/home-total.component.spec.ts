import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTotalComponent } from './home-total.component';

describe('HomeTotalComponent', () => {
  let component: HomeTotalComponent;
  let fixture: ComponentFixture<HomeTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
