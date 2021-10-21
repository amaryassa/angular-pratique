import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('myForm') signUpForm!: NgForm;
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    // console.log(form);
    console.log(this.signUpForm);
  }

  onSetValue() {
    this.signUpForm.form.setValue({
      name: 'amar',
      email: 'amar@amar.fr',
      address: {
        rue: 'Iby',
        ville: 'Ma ville',
        cp: '101010',
      },
    });
  }
  onPatchValue() {
    this.signUpForm.form.patchValue({
      email: 'autre@autre.fr',
    });
  }

  resetForm() {
    this.signUpForm.reset();
  }
}
