import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funds-advanced-search',
  templateUrl: './funds-advanced-search.component.html',
  styleUrls: ['./funds-advanced-search.component.scss']
})
export class FundsAdvancedSearchComponent implements OnInit {
  @Output()
  cancelled = new EventEmitter();

  searchForm: FormGroup;
  rankOptions = [
    { id: 1, selected: true },
    { id: 2, selected: true },
    { id: 3, selected: true },
    { id: 4, selected: true },
    { id: 5, selected: true }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      fundName: new FormControl(null),
      order: new FormControl(null),
      lipperID: new FormControl(null),
      department: new FormControl(null),
      assignee: new FormControl(null),
      universe: new FormControl(null),
      ranks: this.buildRanks()
    });
  }

  buildRanks() {
    const arr = this.rankOptions.map(r => {
      return new FormControl(r.selected);
    });
    return new FormArray(arr);
  }

  get ranks(): FormArray {
    return <FormArray>this.searchForm.get('ranks');
  }

  search() {
    const formValue = Object.assign({}, this.searchForm.value, {
      ranks: this.searchForm.value['ranks']
        .reduce((result, selected, i) => {
          if (selected) {
            result.push(this.rankOptions[i].id);
          }
          return result;
        }, [])
        .join()
    });
    console.log(formValue);
    this.router.navigate(['./'], {
      queryParams: formValue,
      relativeTo: this.route
    });
  }

  cancel() {
    this.searchForm.reset();
    this.cancelled.emit();
  }
}
