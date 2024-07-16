import { Action } from '@ngrx/store';
import { ActionParent } from '../../../models/actionparent.model';
import { SynonymActionTypes } from '../action-types/synonym.actiontypes';

export class GetSynonyms_ACTION implements ActionParent {
    type = SynonymActionTypes.GET_SYNONYMS_STARTED;
    constructor(public payload: any) {
    }
  }
  export class GetSynonymsSuccess implements Action {
    type = SynonymActionTypes.GET_SYNONYMS_SUCCESS;
    constructor(public payload: any) {}
  }
  export class GetSynonymsFailed implements Action {
    type = SynonymActionTypes.GET_SYNONYMS_FAILED;
    constructor(public payload: any) {}
  }
  export class PostSynonym_ACTION implements ActionParent {
    type = SynonymActionTypes.POST_SYNONYM_STARTED;
    constructor(public payload: any) {
    }
  }
  export class PostSynonymSuccess implements Action {
    type = SynonymActionTypes.POST_SYNONYM_SUCCESS;
    constructor(public payload: any) {}
  }
  export class PostSynonymFailed implements Action {
    type = SynonymActionTypes.POST_SYNONYM_FAILED;
    constructor(public payload: any) {}
  }