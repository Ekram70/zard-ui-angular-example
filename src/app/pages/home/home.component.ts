import { Component } from '@angular/core';
import {FaqComponent} from '../../components/faq/faq.component';
import {HeroComponent} from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [
    FaqComponent,
    HeroComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
