import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalContainerModuleService } from 'src/app/global-container/global-container.service';
import { Albums } from 'src/app/interface/albums';
import { User } from 'src/app/interface/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  usersObj: User[] = [];
  albumsObj: Albums[] = [];

  constructor(
    private userService: UsersService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private globalContainer: GlobalContainerModuleService
  ) {}

  async ngOnInit() {
    let id = Number(this.actRoute.snapshot.paramMap.get('id'));
    this.getUser(id);
    this.getUserAlbums(id);
  }

  getUser(id: Number) {
    this.usersObj = [];
    this.userService.getUser(id).subscribe(
      (result) => {
        console.log(result);
        this.usersObj.push(result);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log(`User Detail getUser/${id}- done`);
      }
    );
  }

  getUserAlbums(id: number) {
    this.userService.getUserAlbums(id).subscribe((result) => {
      console.log(result);
      this.albumsObj = result;
    });
  }

  openAlbums(id: number) {
    this.globalContainer.albumId = id;
    this.globalContainer.open('globalContainer');
  }
}
