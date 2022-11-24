import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interface/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  usersObj: User[] = [];
  postUser: User = {
    id: 1,
    name: 'Di Sel',
    username: 'disel',
    email: 'disel@month.biz',
    isAdmin: 'user',
    address: {
      street: 'Burlington Ave',
      suite: 'Apt. 220',
      city: 'Alpharetta',
      zipcode: '30085-3874',
      geo: {
        lat: '-32.3859',
        lng: '83.1496',
      },
    },
    phone: '1-770-736-8031',
    website: 'hildegard.org',
    company: {
      name: 'Urban-Results',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl(''),
  });

  userEditing: boolean = false;

  //Observable filtering
  // users$: Observable<User[]> = new Observable<User[]>();

  // filter = new FormControl('');

  constructor(
    private userService: UsersService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.users$ = this.filter.valueChanges.pipe(
    //   startWith(''),
    //   map((text) => {
    //     return this.search(text);
    //   })
    // );
  }

  ngOnInit(): void {
    this.userService.countSubjectChanged.subscribe((data) => {
      console.log(data);
    });

    //subscrive to Observale form
    this.myForm.valueChanges.subscribe((obj: any) => {
      console.log(obj);
    });
    this.getUsers();
  }

  search(text: string): User[] {
    return this.usersObj.filter((user) => {
      let str = text.toLowerCase();
      return (
        user.name.toLowerCase().includes(str) ||
        user.username.toLowerCase().includes(str) ||
        user.email.toLowerCase().includes(str) ||
        user.phone.toLowerCase().includes(str)
      );
    });
  }

  getUsers() {
    this.usersObj = [];
    this.userService.getUsers().subscribe(
      (result) => {
        console.log(result);
        this.usersObj = result;
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log('done');
      }
    );
  }

  onCreateUser() {
    this.userService.createUser(this.postUser).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done Creating User')
    );
  }

  getUserDetails(obj: User) {
    this.router.navigateByUrl(`user/${obj.id}`);
  }

  openEdit(obj: User) {
    this.userEditing = true;
    this.myForm.patchValue(obj);
  }

  closeEdit() {
    this.userEditing = false;
  }

  saveUserEdit() {
    console.log(this.myForm.value);
  }

  ngOnDestroy(): void {}
}
