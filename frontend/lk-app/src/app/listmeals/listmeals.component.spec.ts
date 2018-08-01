import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMealsComponent } from './listmeals.component';

describe('ListmealsComponent', () => {
  let component: ListMealsComponent;
  let fixture: ComponentFixture<ListMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
