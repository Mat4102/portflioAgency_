import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePatriciaComponent } from './home-patricia.component';

describe('HomePatriciaComponent', () => {
  let component: HomePatriciaComponent;
  let fixture: ComponentFixture<HomePatriciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePatriciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePatriciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
