import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartArticleComponent } from './cart-article.component';

describe('CartArticleComponent', () => {
  let component: CartArticleComponent;
  let fixture: ComponentFixture<CartArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
