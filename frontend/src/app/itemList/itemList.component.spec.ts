import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemList } from './itemList.component';

describe('ItemList', () => {
  let component: ItemList;
  let fixture: ComponentFixture<ItemList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
