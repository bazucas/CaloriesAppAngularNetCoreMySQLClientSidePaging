import { AlertifyService } from './../_services/alertify.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'username', 'role', 'created', 'maxCal', 'options'];
  dataSource;

  placement = 'bottom';
  popoverTitle = 'Are you sure you want to delete this user?';
  // popoverMessage = 'Are you really <b>sure</b> you want to do this?';
  confirmText = 'Yes <i class="glyphicon glyphicon-ok"></i>';
  cancelText = 'No <i class="glyphicon glyphicon-remove"></i>';
  // confirmClicked = false;
  // cancelClicked = false;

  constructor(private userService: UserService,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(<any>data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.alertify.error('Failed to get all users');
    });
  }

  getRole(role: number): string {
    if (role === 0) {
      return 'Admin';
    } else if (role === 1) {
      return 'Manager';
    } else {
      return 'User';
    }
  }

  updateUser(userId: string) {
    alert('update user ' + userId);
  }

  deleteUser(userId: string, username: string) {
    this.userService.DeleteUser(userId).subscribe(data => {
      this.alertify.success('User ' + username + ' successfuly deleted');
      this.getAllUsers();
    }, error => {
      this.alertify.error('Failed to delete user ' + username);
    });
  }
}
