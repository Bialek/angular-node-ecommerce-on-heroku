import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  addProductForm: FormGroup;
  isModalVisable: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public mainService: MainService
  ) {}
  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      thumbnail: [null, Validators.required],
      title: [null, [Validators.required]],
      price: [null, [Validators.required]],
      category: [null, [Validators.required]],
    });
  }

  handleConfirmAdd() {
    if (this.addProductForm.valid) {
      const callback = (): void => {
        this.isModalVisable = false;
        this.addProductForm.reset();
      };
      this.mainService.addProduct(this.addProductForm.value, callback);
    } else {
      for (const i in this.addProductForm.controls) {
        this.addProductForm.controls[i].markAsDirty();
        this.addProductForm.controls[i].updateValueAndValidity();
      }
    }
  }

  toggleModalVisible() {
    this.isModalVisable = !this.isModalVisable;
    this.addProductForm.reset();
  }
}
