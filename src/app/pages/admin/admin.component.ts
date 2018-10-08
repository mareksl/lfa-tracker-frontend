import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/core/services/files/files.service';
import { Subscription } from 'rxjs';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  file: File;

  downloadSub: Subscription;

  constructor(private filesService: FilesService) {}

  ngOnInit() {
    this.file = null;
  }

  downloadFile() {
    this.filesService.download().subscribe(res => {
      const filename = res.headers
        .get('Content-Disposition')
        .split(';')[1]
        .split('=')[1]
        .replace(/['"]/g, '');
      const blob = new Blob([res.body], { type: res.body.type });
      saveAs(blob, filename);
    });
  }

  uploadFile() {
    console.log(this.file);
  }

  onFileChange(event) {
    this.file = event.target.files[0];
  }
}
