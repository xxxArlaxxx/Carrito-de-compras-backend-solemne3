import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCarritoComponent } from './app-carrito.component';

describe('AppCarritoComponent', () => {
  let component: AppCarritoComponent;
  let fixture: ComponentFixture<AppCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
