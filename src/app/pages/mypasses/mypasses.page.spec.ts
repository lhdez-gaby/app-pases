import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MypassesPage } from './mypasses.page';

describe('MypassesPage', () => {
  let component: MypassesPage;
  let fixture: ComponentFixture<MypassesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MypassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
