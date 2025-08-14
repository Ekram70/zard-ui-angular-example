import { Component, inject } from '@angular/core';
import {DarkModeService} from '../../services/darkmode.service';

@Component({
  selector: 'app-theme-toggle-btn',
  imports: [],
  templateUrl: './theme-toggle-btn.component.html',
  styleUrl: './theme-toggle-btn.component.css'
})
export class ThemeToggleBtnComponent {
  private darkModeService = inject(DarkModeService);

  toggleTheme(): void {
    this.darkModeService.toggleTheme();
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.darkModeService.getCurrentTheme();
  }
}
