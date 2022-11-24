import { Component, OnInit } from '@angular/core';
import { Photos } from 'src/app/interface/photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  photosObj: Photos[] = [];

  constructor() {}

  ngOnInit(): void {}
}
