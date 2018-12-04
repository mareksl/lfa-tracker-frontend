import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface AppNotificationOptions {
  status?: string;
  persistent?: boolean;
}

export class AppNotification {
  message: string;
  status: string;
  persistent: boolean;

  constructor(message, options: AppNotificationOptions = {}) {
    this.message = message;
    this.status = options.status || '';
    this.persistent = options.persistent || false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notifications: AppNotification[];
  notificationsChanged: BehaviorSubject<AppNotification[]>;

  constructor() {
    this.notifications = [];
    this.notificationsChanged = new BehaviorSubject<AppNotification[]>([]);
  }

  private removeNotification(notif: AppNotification) {
    this.notifications.splice(this.notifications.indexOf(notif), 1);
    this.notificationsChanged.next(this.notifications);
  }

  notify(message: string, options?: AppNotificationOptions) {
    const notif = new AppNotification(message, options);
    this.notifications.push(notif);
    this.notificationsChanged.next(this.notifications);

    if (!notif.persistent) {
      setTimeout(() => {
        this.removeNotification(notif);
      }, 3000);
    }
  }

  dismiss(notif: AppNotification) {
    this.removeNotification(notif);
  }
}
