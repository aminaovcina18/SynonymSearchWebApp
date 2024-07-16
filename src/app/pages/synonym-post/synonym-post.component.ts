import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppStoreModel } from '../../shared/state/store-models';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import * as synonymActions from '../../shared/state/actions/synonym.actions';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-synonym-post',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule,],
  templateUrl: './synonym-post.component.html',
  styleUrl: './synonym-post.component.scss'
})
export class SynonymPostComponent {
    synonymAddForm: FormGroup;
    get key() {
      return this.synonymAddForm.get('key');
    }
    get value() {
      return this.synonymAddForm.get('value');
    }
    constructor(
      private formBuilder: FormBuilder,
      private store: Store<AppStoreModel>,
      private route: ActivatedRoute,
      private router: Router
    ){
      this.synonymAddForm = this.formBuilder.group(
        {
          key: ['',  Validators.required],
          value: ['',  Validators.required]
        }
      );
    }
    search(): void {
      this.router.navigate(['/']);
    }
    manage(obj: any): void {
        this.store.dispatch(new synonymActions.PostSynonym_ACTION({...obj}));
        this.synonymAddForm = this.formBuilder.group(
          {
            key: ['',  Validators.required],
            value: ['',  Validators.required]
          },
        );
      this.synonymAddForm.markAsUntouched();
    }
}
