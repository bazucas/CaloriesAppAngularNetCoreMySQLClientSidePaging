import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import { User } from '../_models/User';

const USER_DATA: User[] = [
  {id: 1, username: 'Luís Silva', email: '', role: 'user', added: new Date().toLocaleString(), maxCal: 2000, meals: null },
  {id: 2, username: 'Rúben Santos', email: '', role: 'user', added: new Date().toLocaleString(), maxCal: 1800, meals: null },
  {id: 3, username: 'João António', email: '', role: 'user', added: new Date().toLocaleString(), maxCal: 2000, meals: null },
  {id: 4, username: 'Pedro Simões', email: '', role: 'admin', added: new Date().toLocaleString(), maxCal: 1500, meals: null },
  {id: 5, username: 'Paulo Fernandes', email: '', role: 'user', added: new Date().toLocaleString(), maxCal: 1800, meals: null },
  {id: 6, username: 'João Areias', email: '', role: 'user', added: new Date().toLocaleString(), maxCal: 1600, meals: null },
  {id: 7, username: 'Marília Inácio', email: '', role: 'manager', added: new Date().toLocaleString(), maxCal: 1500, meals: null },
  {id: 8, username: 'Luís Inácio', email: '', role: 'manager', added: new Date().toLocaleString(), maxCal: 2000, meals: null },
  {id: 9, username: 'Rui Pedro', email: '', role: 'user', added: new Date().toLocaleString(), maxCal: 1800, meals: null }
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'username', 'role', 'added', 'maxCal', 'options'];
  dataSource = new MatTableDataSource<User>(USER_DATA);

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
