import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './interface/user';
import { OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Ang12Review';
  usersObj: User[] = [];

  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit(): void {
    // this.userService.getUsers().subscribe(
    //   (result) => (this.usersObj = result),
    //   (error: any) => console.log(error),
    //   () => console.log('Welcome!! Fetched Userlist. ')
    // );
  }
  getHelp() {
    this.router.navigateByUrl('help');
  }
}
