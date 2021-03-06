import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SaveData } from '../../auth/save-data.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit, SaveData {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  testEtatForm() {
    console.log('dirty', this.form.dirty);
    console.log('touched', this.form.touched);
  }

  isDataSaved(): boolean {
    return !this.form.dirty;
  }
}
