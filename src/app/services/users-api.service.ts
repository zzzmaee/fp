import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private readonly http = inject(HttpClient);
  private urlApi = 'https://jsonplaceholder.typicode.com/users'

  constructor() {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlApi);
  }
}
