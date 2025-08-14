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
      zTitle: 'Edit Profile',
      zDescription: `Make changes to your profile here. Click save when you're done.`,
      zContent: ContactFormComponent,
      zData: {
        name: 'Samuel Rizzon',
        username: '@samuelrizzondev',
      },
      zOkText: 'Save changes',
      zOnOk: instance => {
        console.log('Form submitted:', instance.form.value);
      },
      zWidth: '425px',
    });
  }

}
