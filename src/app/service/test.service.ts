import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = 'http://localhost:3000/test'
  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.url);
  }

}
