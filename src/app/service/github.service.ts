import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) {}
  getData(): Observable<any> {
    return this.httpClient.get<any>('https://api.github.com/users/chudakchu');
  }
}
