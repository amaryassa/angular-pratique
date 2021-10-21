import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  $valueChanges: Observable<any>;
  $statusChanges: Observable<string>;
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
        [isRestrictedEmails(this.restrictedEmails)]
      ),
      genre: new FormControl('femme', [Validators.required]),
      address: new FormGroup({
        rue: new FormControl(null),
        ville: new FormControl(null),
        cp: new FormControl(null, [Validators.required]),
      }),
      hobbies: new FormArray([]),
    });
    this.$valueChanges = this.signUpForm.valueChanges;
    this.$statusChanges = this.signUpForm.statusChanges;
  }

  onSubmit() {
    console.log(this.signUpForm);
    // console.log(this.signUpForm.value);
  }

  onAddHobby(hobby?: string) {
    const control = new FormControl(hobby ?? null);
    // const control = new FormControl(hobby ?? null, [Validators.required]);
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

  onSetValue() {
    this.onAllDeleteHobbies();
    this.signUpForm.setValue({
      name: 'amar',
      email: 'amar@amar.fr',
      genre: 'femmme',
      hobbies: [],
      address: {
        rue: 'Iby',
        ville: 'Ma ville',
        cp: '101010',
      },
    });
  }
  onPatchValue() {
    this.signUpForm.patchValue({
      email: 'autre@autre.fr',
    });
  }

  resetForm() {
    this.signUpForm.reset();
  }

  // isRestrictedNames2(control: FormControl): { [key: string]: boolean } | null {
  //   if (this.restrictedNames.includes(control.value)) {
  //     return { nameIsRestricted: true };
  //   }
  //   return null;
  // }
}
