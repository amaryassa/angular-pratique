import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import {
  isRestrictedNames,
  isRestrictedEmails,
} from '../validators/validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  genres = ['homme', 'femme'];
  signUpForm: FormGroup;
  restrictedNames = ['amar', 'jsk', 'kabylie'];
  restrictedEmails = ['amar@amar.fr', 'test@test.fr'];
  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        // Validators.maxLength(5),
        // this.isRestrictedNames2.bind(this),
        isRestrictedNames(this.restrictedNames),
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        isRestrictedEmails(this.restrictedEmails)
      ),
      genre: new FormControl('femme', [Validators.required]),
      address: new FormGroup({
        rue: new FormControl(null),
        ville: new FormControl(null),
        cp: new FormControl(null, [Validators.required]),
      }),
      hobbies: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
    // console.log(this.signUpForm.value);
  }

  onAddHobby() {
    const control = new FormControl(null, [Validators.required]);
    this.hobbies.push(control);
  }

  onDeleteHobby(index: number) {
    this.hobbies.removeAt(index);
  }
  onAllDeleteHobbies() {
    this.hobbies.clear();
  }

  get hobbies() {
    return this.signUpForm.get('hobbies') as FormArray;
  }

  get lengthHobbies() {
    return (this.signUpForm.get('hobbies') as FormArray).length;
  }

  // isRestrictedNames2(control: FormControl): { [key: string]: boolean } | null {
  //   if (this.restrictedNames.includes(control.value)) {
  //     return { nameIsRestricted: true };
  //   }
  //   return null;
  // }
}
