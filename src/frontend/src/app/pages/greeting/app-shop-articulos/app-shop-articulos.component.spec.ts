import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShopArticulosComponent } from './app-shop-articulos.component';

describe('AppShopArticulosComponent', () => {
  let component: AppShopArticulosComponent;
  let fixture: ComponentFixture<AppShopArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppShopArticulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppShopArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
