import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeatureCardComponent } from '../feature-card/feature-card.component';
import {FaqComponent} from '../faq/faq.component';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, FeatureCardComponent, FaqComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  zardUICards = [
    {
      id: 1,
      title: "Angular & TailwindCSS Integration",
      description: "Zard UI seamlessly integrates Angular with TailwindCSS, providing a powerful combination for building modern web applications. Leverage the flexibility of Angular's component-based architecture alongside the utility-first styling of TailwindCSS to create responsive and maintainable UIs.",
      icon: "⚙️",
      color: "#34D399"
    },
    {
      id: 2,
      title: "Shadcn/ui Inspired Components",
      description: "Drawing inspiration from the popular shadcn/ui design system, Zard UI offers a comprehensive set of components that adhere to modern design principles. These components are designed to be visually appealing and user-friendly, ensuring a consistent and polished user experience.",
      icon: "🎨",
      color: "#60A5FA"
    },
    {
      id: 3,
      title: "Open Source & Developer Friendly",
      description: "Zard UI is a free and open-source component library, empowering developers to build beautiful UIs without any licensing concerns. With a focus on developer experience, it provides easy-to-use APIs, and comprehensive documentation, and a supportive community to assist you.",
      icon: "💻",
      color: "#FBBF24"
    }
  ];

}
