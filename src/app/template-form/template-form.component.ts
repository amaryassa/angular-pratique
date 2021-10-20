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
    console.log(form);
    console.log(this.signUpForm);
  }
}
