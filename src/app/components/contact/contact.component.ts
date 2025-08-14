import {Component, inject} from '@angular/core';
import {ZardButtonComponent} from '@shared/components/button/button.component';
import {ZardDialogService} from '@shared/components/dialog/dialog.service';
import {ContactFormComponent} from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  imports: [
    ZardButtonComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private dialogService = inject(ZardDialogService);

  openDialog() {
    this.dialogService.create({
      zTitle: 'Drop Us a Message',
      zDescription: `Your email address will not be published. All the fields are required.`,
      zContent: ContactFormComponent,
      zOkText: 'Send',
      zOnOk: instance => {
        console.log('Form submitted:', instance.form.value);
      },
      zWidth: '425px',
    });
  }

}
