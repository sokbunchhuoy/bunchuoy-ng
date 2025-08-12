import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  private downloadUrl = 'http://localhost:3000/images'; // Update URL for mock server

  constructor(private http: HttpClient) { }

  downloadJson(): Observable<number> {
    const req = new HttpRequest('GET', this.downloadUrl, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req).pipe(
      map((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.DownloadProgress:
            return Math.round((100 * event.loaded) / (event.total ?? 1)); // Calculate download progress in percentage
          case HttpEventType.Response:
            return 100; // Download complete
          default:
            return 0;
        }
      })
    );
  }
}
