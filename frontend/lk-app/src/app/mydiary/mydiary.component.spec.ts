import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MyDiaryComponent } from './mydiary.component';

describe('MydiaryComponent', () => {
  let component: MyDiaryComponent;
  let fixture: ComponentFixture<MyDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
