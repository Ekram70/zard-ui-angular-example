import { Component } from '@angular/core';
import {ZardButtonComponent} from '@shared/components/button/button.component';

@Component({
  selector: 'app-footer',
  imports: [
    ZardButtonComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
