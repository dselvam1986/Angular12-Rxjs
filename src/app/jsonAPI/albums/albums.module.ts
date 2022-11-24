import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumsComponent } from './albums.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AlbumsComponent],
  exports: [AlbumsComponent],
  providers: [],
})
export class AlbumsModule {}
