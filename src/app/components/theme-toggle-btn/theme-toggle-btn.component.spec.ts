import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeToggleBtnComponent } from './theme-toggle-btn.component';

describe('ThemeToggleBtnComponent', () => {
  let component: ThemeToggleBtnComponent;
  let fixture: ComponentFixture<ThemeToggleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeToggleBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeToggleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
