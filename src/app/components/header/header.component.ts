import { Component } from '@angular/core';
import {ThemeToggleBtnComponent} from '../theme-toggle-btn/theme-toggle-btn.component';

@Component({
  selector: 'app-header',
  imports: [
    ThemeToggleBtnComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
