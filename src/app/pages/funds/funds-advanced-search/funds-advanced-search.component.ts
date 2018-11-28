import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FundsService } from 'src/app/core/services/funds/funds.service';

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

  constructor(
    private router: Router,
    private fundsService: FundsService
  ) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      fundName: new FormControl(null),
      order: new FormControl(null),
      lipperID: new FormControl(null),
      department: new FormControl(null),
      fundOwner: new FormControl(null),
      awardUniverse: new FormControl(null),
      highestRank: this.buildRanks()
    });
  }

  buildRanks() {
    const arr = this.rankOptions.map(r => {
      return new FormControl(r.selected);
    });
    return new FormArray(arr);
  }

  get highestRank(): FormArray {
    return <FormArray>this.searchForm.get('highestRank');
  }

  search() {
    const formValue = Object.assign({}, this.searchForm.value, {
      highestRank: this.searchForm.value['highestRank']
        .reduce((result, selected, i) => {
          if (selected) {
            result.push(this.rankOptions[i].id);
          }
          return result;
        }, [])
        .join()
    });
    this.fundsService.getRange(1, 10, formValue);
    this.router.navigate(['/funds'], {
      queryParams: formValue
    });
  }

  cancel() {
    this.searchForm.reset();
    this.cancelled.emit();
  }
}
