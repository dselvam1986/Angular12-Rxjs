import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngHelpComponent } from './ang-help/ang-help.component';
import { AlbumsComponent } from './jsonAPI/albums/albums.component';
import { PhotosComponent } from './jsonAPI/photos/photos.component';
import { PostsComponent } from './jsonAPI/posts/posts.component';
import { UserDetailsComponent } from './jsonAPI/user-details/user-details.component';
import { UsersComponent } from './jsonAPI/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'help', component: AngHelpComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'posts', component: PostsComponent },
  // {
  //   path: 'albums',
  //   loadChildren: () =>
  //     import('./jsonAPI/albums/albums.module').then((m) => m.AlbumsModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
