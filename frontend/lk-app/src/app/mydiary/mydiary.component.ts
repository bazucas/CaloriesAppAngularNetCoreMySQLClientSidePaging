import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-mydiary',
  templateUrl: './mydiary.component.html',
  styleUrls: ['./mydiary.component.css']
})
export class MyDiaryComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
