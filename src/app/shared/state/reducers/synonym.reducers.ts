import { SynonymActionTypes } from "../action-types/synonym.actiontypes";
import { SynonymStoreModel } from "../store-models/synonym.storemodels";

const INITIAL_STATE: SynonymStoreModel = {
    error: null,
  
    synonyms: [],
    synonymsLoading: false,
  
    postSynonym: null,
    postSynonymLoading: false,
  
  };

  export default (state = INITIAL_STATE, { type, payload }: any) => {
    switch (type) {
      case SynonymActionTypes.GET_SYNONYMS_STARTED:
        return { ...state, synonymsLoading: true, synonyms: [] };
      case SynonymActionTypes.GET_SYNONYMS_SUCCESS:
        return {
          ...state,
          synonymsLoading: false,
          synonyms: payload,
        };
      case SynonymActionTypes.GET_SYNONYMS_FAILED:
        return { ...state, synonymsLoading: false, error: payload };

      case SynonymActionTypes.GET_SYNONYM_CLEAR:
        return { ...state, synonyms: [] };
  
      case SynonymActionTypes.POST_SYNONYM_STARTED:
        return { ...state, postSynonymLoading: true };
      case SynonymActionTypes.POST_SYNONYM_SUCCESS:
        return {
          ...state,
          postSynonymLoading: false,
          postSynonym: payload,
        };
      case SynonymActionTypes.POST_SYNONYM_FAILED:
        return { ...state, postSynonymLoading: false, error: payload };
  
      default:
        return state;
    }
  };
  