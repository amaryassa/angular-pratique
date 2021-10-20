import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  genres = ['homme', 'femme'];

  signUpForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(5),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      genre: new FormControl('femme', [Validators.required]),
      address: new FormGroup({
        rue: new FormControl(null),
        ville: new FormControl(null),
        cp: new FormControl(null, [Validators.required]),
      }),
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }
}
