import { Component } from '@angular/core';
import {ZardAccordionComponent} from '@shared/components/accordion/accordion.component';
import {ZardAccordionItemComponent} from '@shared/components/accordion/accordion-item.component';

@Component({
  selector: 'app-faq',
  imports: [
    ZardAccordionComponent,
    ZardAccordionItemComponent
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqItems = [
    {
      id: 'z1',
      question: 'What is Zard UI?',
      answer: 'Zard UI is a free, open-source UI component library for Angular, styled with Tailwind CSS and inspired by Shadcn/ui and ng-zorro.'
    },
    {
      id: 'z2',
      question: 'How is Zard UI different from other Angular UI libraries?',
      answer: 'It blends utility-first Tailwind design with Angular components, offering accessible, modern UI with a clean, Tailwind-based workflow.'
    },
    {
      id: 'z4',
      question: 'Where can I find Zard UI documentation?',
      answer: 'Visit https://www.zardui.com/docs to access guides, component references, and usage examples.'
    },
    {
      id: 'z5',
      question: 'Is Zard UI open source? Can I contribute?',
      answer: 'Yes—licensed under MIT. Contributions are welcome via the GitHub repo, including code, documentation, and new components.'
    },
    {
      id: 'z6',
      question: 'What components are currently available or in development?',
      answer: 'Core components like Accordion and Tabs are implemented with responsiveness and accessibility. More are being added as the library evolves.'
    }
  ];

}
