import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

const USER_DATA: PeriodicElement[] = [
  {id: 1, name: 'Luís Silva', role: 'user'},
  {id: 2, name: 'Rúben Santos', role: 'user'},
  {id: 3, name: 'João António', role: 'user'},
  {id: 4, name: 'Pedro Simões', role: 'admin'},
  {id: 5, name: 'Paulo Fernandes', role: 'user'},
  {id: 6, name: 'João Areias', role: 'user'},
  {id: 7, name: 'Marília Inácio', role: 'manager'},
  {id: 8, name: 'Luís Inácio', role: 'manager'},
  {id: 9, name: 'Rui Pedro', role: 'user'},

];

export interface PeriodicElement {
  name: string;
  id: number;
  role: string;
}

@Component({
  selector: 'app-listmeals',
  templateUrl: './listmeals.component.html',
  styleUrls: ['./listmeals.component.css']
})

export class ListMealsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'name', 'role'];
  dataSource = new MatTableDataSource(USER_DATA);

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
