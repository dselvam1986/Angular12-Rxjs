import { Component, OnInit } from '@angular/core';
import { GlobalContainerModuleService } from 'src/app/global-container/global-container.service';
import { Photos } from 'src/app/interface/photos';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  photosObj: Photos[] = [];
  constructor(
    private userService: UsersService,
    private globalService: GlobalContainerModuleService
  ) {}

  ngOnInit(): void {
    let id = this.globalService.albumId;
    this.userService.getAlbumPhotos(id).subscribe(
      (result) => (this.photosObj = result),
      (error: any) => console.log(error),
      () => console.log(`Photos from Album id: ${id}`)
    );
  }
}
