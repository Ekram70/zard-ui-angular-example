import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Z_MODAL_DATA} from '@shared/components/dialog/dialog.service';
import {ZardInputDirective} from '@shared/components/input/input.directive';

interface DialogData {
  name: string;
  username: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ZardInputDirective],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  private zData: DialogData = inject(Z_MODAL_DATA);

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor() {
    if (this.zData) {
      this.form.patchValue(this.zData);
    }
  }
}
