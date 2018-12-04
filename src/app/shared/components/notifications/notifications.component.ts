import { Component, OnInit } from '@angular/core';
import {
  NotificationsService,
  AppNotification
} from 'src/app/core/services/notifications/notifications.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: Observable<AppNotification[]>;

  constructor(private notifService: NotificationsService) {}

  ngOnInit() {
    this.notifications = this.notifService.notificationsChanged;
  }

  dismiss(notif: AppNotification) {
    this.notifService.dismiss(notif);
  }
}
