import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface IBreadcrumb {
  path: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: IBreadcrumb[];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.breadcrumbs = this.createBreadcrumbs(this.route);
      });
  }

  createBreadcrumbs(
    route: ActivatedRoute,
    breadcrumbs: IBreadcrumb[] = []
  ): IBreadcrumb[] {
    const path = route.routeConfig ? route.routeConfig.path : '';
    // const breadcrumb = route.snapshot.params['id']
    //   ? route.snapshot.params['id']
    //   : route.routeConfig.path;

    console.log(route);

    return breadcrumbs;
  }
}
