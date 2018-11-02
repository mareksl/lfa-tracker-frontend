import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { config } from 'src/app/config/app-settings.config';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  constructor(private http: HttpClient) {}

  private getEventMessage(event: HttpEvent<any>) {
    switch (event.type) {
      case HttpEventType.Sent:
        return { type: 'sent', status: 'pending' };

      case HttpEventType.UploadProgress:
        const percentDone = event.loaded / event.total;
        if (percentDone === 1) {
          return { type: 'uploaded', status: 'pending' };
        }
        return { type: 'uploading', status: 'pending' };

      case HttpEventType.Response:
        return event.status === 201
          ? { type: 'uploaded', status: 'succeeded' }
          : { type: 'uploaded', status: 'failed' };
      default:
        return { type: 'other', status: 'other' };
    }
  }

  download() {
    return this.http.get(`${config.apiUrl}/files`, {
      responseType: 'blob',
      observe: 'response'
    });
  }

  upload(form: FormData) {
    // const file: File = <File>form.get('file');
    const req = new HttpRequest('POST', `${config.apiUrl}/files`, form, {
      reportProgress: true
    });
    return this.http.request(req).pipe(map(this.getEventMessage));
  }
}
