import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreHandlersComponent } from './store-handlers.component';

describe('StoreHandlersComponent', () => {
  let component: StoreHandlersComponent;
  let fixture: ComponentFixture<StoreHandlersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreHandlersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreHandlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
