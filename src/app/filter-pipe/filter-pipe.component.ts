import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.scss'],
})
export class FilterPipeComponent implements OnInit {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Users Data Received');
    }, 3000);
  });
  filteredString: string = '';
  users = [
    {
      name: 'lala test user',
      joinedDate: new Date(15, 2, 2016),
    },
    {
      name: 'lili ssssss',
      joinedDate: new Date(17, 3, 2019),
    },
    {
      name: 'lolo',
      joinedDate: new Date(20, 4, 2019),
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onAddUser() {
    this.users.push({
      name: 'Sample',
      joinedDate: new Date(12, 2, 2009),
    });
  }
}
