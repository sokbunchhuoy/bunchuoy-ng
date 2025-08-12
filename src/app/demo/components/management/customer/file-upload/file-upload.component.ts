import { Component } from '@angular/core';
import { FileUploadService } from 'src/app/service/file-upload.service';
import { HttpEventType } from '@angular/common/http';
import { DownloadService } from 'src/app/service/download.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  uploadProgress: number = 0;
  downloadProgress: number = 0;

  constructor(private uploadService: FileUploadService, private downloadService: DownloadService) { }

  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadService.uploadImage(file).subscribe((progress: number) => {
        this.uploadProgress = progress;
        console.log("Upload", this.uploadProgress);

      });
    }
  }

  downloadJsonData() {
    this.downloadService.downloadJson().subscribe((progress: number) => {
      this.downloadProgress = progress;
      console.log("Download", this.downloadProgress);

    });
  }

}
