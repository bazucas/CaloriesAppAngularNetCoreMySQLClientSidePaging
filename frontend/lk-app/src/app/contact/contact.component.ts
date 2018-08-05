import { AlertifyService } from './../_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Contact } from '../_models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: Contact = {email: '', subject: '', message: ''};

  constructor(private userService: UserService,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }

  sendMail() {
    this.userService.sendMail(this.model).subscribe(data => {
      this.alertify.success('Message sent, thank you');
    }, error => {
      this.alertify.error('Failed to send message');
    });
  }
}
