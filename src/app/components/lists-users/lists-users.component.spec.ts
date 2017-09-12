import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsUsersComponent } from './lists-users.component';

describe('ListsUsersComponent', () => {
  let component: ListsUsersComponent;
  let fixture: ComponentFixture<ListsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
