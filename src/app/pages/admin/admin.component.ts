import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  file: File;

  constructor() {}

  ngOnInit() {
    this.file = null;
  }

  uploadFile() {
    console.log(this.file);
  }

  onFileChange(event) {
    this.file = event.target.files[0];
  }
}
