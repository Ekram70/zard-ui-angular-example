import {Component, input} from '@angular/core';
import {ZardCardComponent} from '@shared/components/card/card.component';
import {NgStyle} from '@angular/common';
import {ArrowRightComponent} from '../arrow-right/arrow-right.component';

@Component({
  selector: 'app-feature-card',
  imports: [ZardCardComponent, NgStyle, ArrowRightComponent],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.css'
})
export class FeatureCardComponent {
  title = input.required<string>();
  description = input.required<string>();
  icon = input.required<string>();
  color = input.required<string>();
}
