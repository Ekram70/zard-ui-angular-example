import { Component } from '@angular/core';
import {ThemeToggleBtnComponent} from '../theme-toggle-btn/theme-toggle-btn.component';
import {ContactComponent} from '../contact/contact.component';

@Component({
  selector: 'app-header',
  imports: [
    ThemeToggleBtnComponent,
    ContactComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
