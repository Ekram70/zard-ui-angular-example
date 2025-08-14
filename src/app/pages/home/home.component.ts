import { Component } from '@angular/core';
import {FaqComponent} from '../../components/faq/faq.component';
import {FeatureCardComponent} from '../../components/feature-card/feature-card.component';
import {HeroComponent} from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [
    FaqComponent,
    FeatureCardComponent,
    HeroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
