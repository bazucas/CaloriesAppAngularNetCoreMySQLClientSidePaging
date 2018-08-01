import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listmeals',
  templateUrl: './listmeals.component.html',
  styleUrls: ['./listmeals.component.css']
})
export class ListMealsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  // tslint:disable-next-line:member-ordering
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

}
