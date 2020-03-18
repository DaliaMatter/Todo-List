import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItmeComponent } from './todo-itme.component';

describe('TodoItmeComponent', () => {
  let component: TodoItmeComponent;
  let fixture: ComponentFixture<TodoItmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
