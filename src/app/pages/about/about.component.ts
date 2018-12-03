import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  roadmapItems = [
    { title: 'Funds list display', complete: true },
    { title: 'Fund details display', complete: false },
    { title: 'Statistics display', complete: true },
    { title: 'Statistics export', complete: false },
    { title: 'Historical statistics upload', complete: true },
    { title: 'Historical statistics remove', complete: true },
    { title: 'Historical statistics charts', complete: true },
    { title: 'Funds advanced search', complete: true },
    { title: 'User accounts & authentication', complete: true },
    { title: 'User roles', complete: true },
    { title: 'Dashboard panels', complete: false },
    { title: 'Comments', complete: false },
    { title: 'Notifications', complete: false },
    { title: 'Documentation', complete: false }
  ];

  constructor() {}

  ngOnInit() {}
}
