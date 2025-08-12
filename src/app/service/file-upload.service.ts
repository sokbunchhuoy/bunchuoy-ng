import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private uploadUrl = 'http://localhost:3000/images'; // Update URL for mock server

  constructor(private http: HttpClient) { }

  uploadImage(image: File): Observable<number> {
    const formData = new FormData();
    formData.append('image', image);

    const req = new HttpRequest('POST', this.uploadUrl, formData, {
      reportProgress: true,
    });

    return this.http.request(req).pipe(
      map((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            return Math.round((100 * event.loaded) / (event.total ?? 1)); // Calculate upload progress in percentage
          case HttpEventType.Response:
            return 100; // Upload complete
          default:
            return 0;
        }
      })
    );
  }

  getDropdown() {
    console.log("3-4, 4-5:30");

  }

}
