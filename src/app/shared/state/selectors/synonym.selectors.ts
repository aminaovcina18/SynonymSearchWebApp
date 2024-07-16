import { createSelector } from "@ngrx/store";
import { AppStoreModel } from "../store-models";

const synonymError = (state: AppStoreModel) => state.synonym.error;

const synonyms = (state: AppStoreModel) => state.synonym.synonyms;
const synonymsLoading = (state: AppStoreModel) => state.synonym.synonymsLoading;
export const synonymsSelector = createSelector(
    synonyms,
    synonymsLoading,
  synonymError,
  (synonyms: any, synonymsLoading: boolean, synonymError: any) => {
    return {
        synonyms,
        synonymsLoading,
        synonymError,
    };
  }
);
