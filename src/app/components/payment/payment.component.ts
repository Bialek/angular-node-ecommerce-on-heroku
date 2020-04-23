import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  validateForm: FormGroup;

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(
    private formBuilder: FormBuilder,
    public mainService: MainService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      name: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      agree: [false, [Validators.requiredTrue]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.mainService.paypal(this.validateForm.value);
    } else {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }
}
