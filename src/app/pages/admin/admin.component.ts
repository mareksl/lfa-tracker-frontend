import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/core/services/files/files.service';
import { Subscription } from 'rxjs';
import { saveAs } from 'file-saver';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FundsService } from 'src/app/core/services/funds/funds.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  form: FormGroup;
  loading: boolean;
  success: boolean;
  file: File;

  downloadSub: Subscription;

  constructor(
    private filesService: FilesService,
    private fb: FormBuilder,
    private fundsService: FundsService
  ) {}

  ngOnInit() {
    this.loading = false;
    this.success = false;
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({ file: null });
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
    const formModel = this.prepareSave();
    this.loading = true;
    this.success = true;
    this.filesService.upload(formModel).subscribe(res => {
      this.loading = false;
      this.success = true;
    });
  }

  prepareSave() {
    const input = new FormData();
    input.append('file', this.form.get('file').value);
    return input;
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.form.get('file').setValue(this.file);
    }
  }

  removeAllFunds() {
    if (confirm('Remove all funds?')) {
      this.loading = true;
      this.fundsService.removeAll().subscribe(response => {
        alert('All funds removed');
        this.loading = false;
      });
    }
  }
}
