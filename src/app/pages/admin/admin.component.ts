import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilesService } from 'src/app/core/services/files/files.service';
import { Subscription } from 'rxjs';
import { saveAs } from 'file-saver';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FundsService } from 'src/app/core/services/funds/funds.service';
import { StatisticsService } from 'src/app/core/services/statistics/statistics.service';
import { IStatistics } from 'src/app/shared/models/statistics.model';
import { formatDate } from '@angular/common';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  form: FormGroup;
  loading: boolean;
  fileStatus: string;
  file: File;

  downloadSub: Subscription;

  historicalStats: IStatistics[];
  historicalSub: Subscription;

  constructor(
    private filesService: FilesService,
    private fb: FormBuilder,
    private fundsService: FundsService,
    private statsService: StatisticsService,
    private notifService: NotificationsService
  ) {}

  ngOnInit() {
    this.loading = false;
    this.fileStatus = '';
    this.historicalStats = [];
    this.createForm();

    this.historicalSub = this.statsService.historicalStatsChanged.subscribe(
      (stats: IStatistics[]) => {
        this.historicalStats = stats;
      }
    );
    this.statsService.getHistorical();
  }

  ngOnDestroy() {
    this.historicalSub.unsubscribe();
  }

  createForm() {
    this.form = this.fb.group({
      file: null,
      date: formatDate(new Date(), 'yyyy-MM-dd', 'en_US'),
      overwriteFunds: true
    });
  }

  downloadFile() {
    this.loading = true;
    this.notifService.notify('Exporting file...');

    this.filesService.download().subscribe(res => {
      const filename = res.headers
        .get('Content-Disposition')
        .split(';')[1]
        .split('=')[1]
        .replace(/['"]/g, '');
      const blob = new Blob([res.body], { type: res.body.type });
      saveAs(blob, filename);
      this.loading = false;
    });
  }

  uploadFile() {
    this.loading = true;
    const formModel = this.prepareSave();
    this.fileStatus = 'uploading';
    this.filesService.upload(formModel).subscribe(res => {
      if (res.type === 'uploaded' && res.status === 'pending') {
        this.fileStatus = 'processing';
      }
      if (res.status === 'succeeded') {
        this.loading = false;
        this.fileStatus = 'success';
        this.notifService.notify('File uploaded successfully', {
          status: 'success'
        });
        this.statsService.getHistorical();
      }
      if (res.status === 'failed') {
        this.loading = false;
        this.fileStatus = 'failure';
        this.notifService.notify('File upload failed', {
          status: 'danger'
        });
      }
    });
  }

  prepareSave() {
    const input = new FormData();
    const date = new Date(this.form.get('date').value);
    input.append('file', this.form.get('file').value);
    input.append('date', date.toISOString());
    input.append('overwriteFunds', this.form.get('overwriteFunds').value);
    return input;
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.form.get('file').setValue(this.file);
      this.fileStatus = '';
    }
  }

  removeAllFunds() {
    if (confirm('Remove all funds?')) {
      this.loading = true;
      this.fundsService.removeAll().subscribe(response => {
        this.notifService.notify('All funds removed', { status: 'success' });
        this.loading = false;
      });
    }
  }

  removeStatistics(stats: IStatistics) {
    if (
      confirm(
        `Remove statistics as of: ${formatDate(
          stats.date,
          'dd/MM/y',
          'en_US'
        )}?`
      )
    ) {
      this.statsService.removeById(stats._id);
    }
  }
}
