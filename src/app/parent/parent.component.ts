import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  counter = 0;
  constructor() {}

  ngOnInit(): void {}

  onIncrement() {
    this.counter++;
  }
}