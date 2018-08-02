import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import { User } from '../_models/User';

const USER_DATA: User[] = [
  {id: 1, name: 'Luís Silva', role: 'user', added: new Date().toLocaleString(), maxCal: 2000, meals: null },
  {id: 2, name: 'Rúben Santos', role: 'user', added: new Date().toLocaleString(), maxCal: 1800, meals: null },
  {id: 3, name: 'João António', role: 'user', added: new Date().toLocaleString(), maxCal: 2000, meals: null },
  {id: 4, name: 'Pedro Simões', role: 'admin', added: new Date().toLocaleString(), maxCal: 1500, meals: null },
  {id: 5, name: 'Paulo Fernandes', role: 'user', added: new Date().toLocaleString(), maxCal: 1800, meals: null },
  {id: 6, name: 'João Areias', role: 'user', added: new Date().toLocaleString(), maxCal: 1600, meals: null },
  {id: 7, name: 'Marília Inácio', role: 'manager', added: new Date().toLocaleString(), maxCal: 1500, meals: null },
  {id: 8, name: 'Luís Inácio', role: 'manager', added: new Date().toLocaleString(), maxCal: 2000, meals: null },
  {id: 9, name: 'Rui Pedro', role: 'user', added: new Date().toLocaleString(), maxCal: 1800, meals: null }
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'name', 'role', 'added', 'maxCal', 'options'];
  dataSource = new MatTableDataSource<User>(USER_DATA);

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  alertt(val: string) {
    alert(val);
  }

}
