import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './jsonAPI/users/users.component';
import { PhotosComponent } from './jsonAPI/photos/photos.component';
import { PostsComponent } from './jsonAPI/posts/posts.component';
import { AlbumsComponent } from './jsonAPI/albums/albums.component';
import { AngHelpComponent } from './ang-help/ang-help.component';
import { UserDetailsComponent } from './jsonAPI/user-details/user-details.component';
import { HideAfterDirective } from './directives/hide-after.directive';
import { SetBackgroundDirective } from './directives/set-background.directive';
import { GlobalContainerModule } from './global-container/global-container.module';
import { AlbumsModule } from './jsonAPI/albums/albums.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PhotosComponent,
    PostsComponent,
    AngHelpComponent,
    UserDetailsComponent,
    HideAfterDirective,
    SetBackgroundDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlbumsModule,
    FormsModule,
    ReactiveFormsModule,
    GlobalContainerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
