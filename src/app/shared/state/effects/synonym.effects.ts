import { Router } from "@angular/router";
import { SynonymService } from "../../services/synonym.service";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of, switchMap } from 'rxjs';
import { SynonymActionTypes } from "../action-types/synonym.actiontypes";
import { ActionParent } from "../../../models/actionparent.model";
import * as synonymActions from '../../state/actions/synonym.actions';
import { SnackBarService } from "../../services/snack-bar.service";
import { SnackType } from "../../../config/enums/snack-bar/snack-type.enum";
import { SnackStyle } from "../../../config/enums/snack-bar/snack-style.enum";

@Injectable()
export class SynonymEffects {
  constructor(
    private actions$: Actions,
    private synonymService: SynonymService,
    private snackBarService: SnackBarService,
    private router: Router,
  ) { }

  getSynonyms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SynonymActionTypes.GET_SYNONYMS_STARTED),
      mergeMap((action: ActionParent) => this.getSynonyms(action.payload))
    )
  );
  getSynonyms(data: any) {
    return this.synonymService.getSynonyms(data).pipe(
      map((data: any) => {
        return new synonymActions.GetSynonymsSuccess(data);
      }),
      catchError((err) => {
        this.snackBarService.openSnackBar(
          err.error.detail,
          '',
          SnackType.Close,
          SnackStyle.Error
        );
        return of(new synonymActions.GetSynonymsFailed(err));
      })
    );
  }

  postSynonym$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SynonymActionTypes.POST_SYNONYM_STARTED),
      mergeMap((action: ActionParent) => this.postSynonym(action.payload))
    )
  );
  postSynonym(payload: any) {
    return this.synonymService.postSynonym(payload).pipe(
      switchMap((data: any) => {
        console.log(data)
        this.snackBarService.openSnackBar(
          data.message,
          '',
          SnackType.Close,
          SnackStyle.Success
        );
        return [
          new synonymActions.PostSynonymSuccess(data),
        ];
      }),
      catchError((err) => {
        this.snackBarService.openSnackBar(
          err.error.detail,
          '',
          SnackType.Close,
          SnackStyle.Error
        );
        return of(new synonymActions.PostSynonymFailed(err));
      })
    );
  }



}


