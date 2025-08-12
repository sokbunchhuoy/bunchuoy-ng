import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  // Read all items
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/data`);
  }

  // Create a new item
  create(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  // Update an item
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }

  // Delete an item
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
