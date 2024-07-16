import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppStoreModel } from '../../shared/state/store-models';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import * as synonymActions from '../../shared/state/actions/synonym.actions';
import * as synonymSelectors from '../../shared/state/selectors/synonym.selectors';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-synonym-search',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, CommonModule, LoadingComponent],
  templateUrl: './synonym-search.component.html',
  styleUrl: './synonym-search.component.scss'
})
export class SynonymSearchComponent {
  dataSource: any[] = [];
  LOADING = false;
  synonymSearchForm: FormGroup;
  get search() {
    return this.synonymSearchForm.get('search');
  }
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppStoreModel>,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.synonymSearchForm = this.formBuilder.group(
      {
        search: ['']
      }
    );
    this.store
    .pipe(select(synonymSelectors.synonymsSelector))
    .subscribe((values) => {
      const { synonyms, synonymsLoading } = values;
      this.LOADING = synonymsLoading;
      if(!synonyms) return;
      this.dataSource = synonyms;
    });
  }
  ngOnInit(): void {
    this.store.dispatch(new synonymActions.GetSynonymClear(null));
  }
  addNew(): void {
    this.router.navigate(['/post']);
  }
  manage(search: any): void {
      this.store.dispatch(new synonymActions.GetSynonyms_ACTION(search));
  }
}
