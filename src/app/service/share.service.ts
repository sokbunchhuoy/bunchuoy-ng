import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<number> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post('http://localhost:3000/uploads', formData, {
      reportProgress: true,
      observe: 'events',
    }).pipe(
      map((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            return Math.round((100 * event.loaded) / event.total!);
          case HttpEventType.Response:
            return 100; // When the upload completes
          default:
            return 0;
        }
      })
    );
  }
}
