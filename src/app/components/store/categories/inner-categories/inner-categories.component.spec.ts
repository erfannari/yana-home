import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerCategoriesComponent } from './inner-categories.component';

describe('InnerCategoriesComponent', () => {
  let component: InnerCategoriesComponent;
  let fixture: ComponentFixture<InnerCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
