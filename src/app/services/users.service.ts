import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';
import { Albums } from '../interface/albums';
import { Photos } from '../interface/photos';
import { Posts } from '../interface/posts';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private jsonApiUrl = environment.jsonPlaceHolder;

  countSubject = new BehaviorSubject<string>('');
  countSubjectChanged = this.countSubject.asObservable();

  readonly moreParams = ['test', 'test2'];
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    let myHeaders = new HttpHeaders({
      myheaders: ['headervalue', 'headervalue2'],
    });
    myHeaders = myHeaders.set('id', '1234'); // set to override. append to concat

    // let myParams = new HttpParams().set('page', '5').set('sort', 'true');

    // const theParams = { ['testList']: this.moreParams };
    // let myParams = new HttpParams({ fromObject: theParams });

    // let myParams = new HttpParams({ fromString: 'name=Dino&id=58' });

    // return this.http.get<User[]>(`${this.jsonApiUrl}/users`, {
    //   headers: myHeaders,
    //   params: myParams,
    // });
    // return this.http.get<User[]>(`${this.jsonApiUrl}/users`, {
    //   observe: 'events',
    //   reportProgress: true,
    // });

    // return this.http.get<User[]>(`${this.jsonApiUrl}/users`).pipe(
    //   tap((users) => console.log(users)),
    //   map((users) =>
    //     users.map((user) => ({
    //       ...user,
    //       name: user.name.toUpperCase(),
    //       isAdmin: user.id === 10 ? 'admin' : 'user',
    //     }))
    //   )
    // );
    // return this.http.get<User[]>(`${this.jsonApiUrl}/users0`).pipe(
    //   catchError((error: any) => {
    //     return of([]); // catch the error and return a empty array or pass placeholder object
    //   })
    // );
    return this.http
      .get<User[]>(`${this.jsonApiUrl}/users`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    return throwError({
      code: 404,
      message: 'Page not found or api not found',
    });
    throw new Error('Method not implemented');
  }

  getUser(id: Number): Observable<User> {
    return this.http.get<User>(`${this.jsonApiUrl}/users/${id}`).pipe(
      map((user) => {
        return {
          ...user,
          isAdmin: user.id === 10 ? 'admin' : 'user',
          name: user.name.toUpperCase(),
        };
      })
    );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.jsonApiUrl}/users`, user);
  }

  // put - have to send the entire object with changes values to replace in backend.
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.jsonApiUrl}/users/${user.id}`, user);
  }

  //patch - only need to send the fields to change rest will remain the same - BETTER!!
  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.jsonApiUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.jsonApiUrl}/users/${id}`);
  }

  /************************ User - Nested Routes ***********************************/
  // getUserAlbums(id: Number): Promise<Albums[]> {
  //   return this.http
  //     .get<Albums[]>(`${this.jsonApiUrl}/users/${id}/albums`)
  //     .toPromise();
  // }

  getUserAlbums(id: Number): Observable<Albums[]> {
    return this.http.get<Albums[]>(`${this.jsonApiUrl}/users/${id}/albums`);
  }

  getUserTodos(id: Number): Observable<User> {
    return this.http.get<User>(`${this.jsonApiUrl}/users/${id}/todos`);
  }

  getUserPosts(id: Number): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.jsonApiUrl}/users/${id}/posts`);
  }

  getAlbumPhotos(id: Number): Observable<Photos[]> {
    return this.http.get<Photos[]>(`${this.jsonApiUrl}/albums/${id}/photos`);
  }
}
