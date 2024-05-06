import { EActionType } from './types';

interface RepoReducer {
  loading: boolean;
  error: boolean;
  repos: any[];
}

const initialState = {
  loading: false,
  error: false,
  repos: [],
  readmeLoading: false,
  readmeError: false,
  readme: null,
};

const reducer = (state: any = initialState, action: any): RepoReducer => {
  switch (action.type) {
    case EActionType.FETCH_REPO_REQUEST:
      return { ...state, loading: true, repos: [] };
    case EActionType.FETCH_REPO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        repos: action.payload.data,
      };
    case EActionType.FETCH_REPO_ERROR:
      return { ...state, error: true, loading: false };
    case EActionType.FETCH_README_REQUEST:
      return { ...state, readmeLoading: true, readme: null };
    case EActionType.FETCH_README_SUCCESS:
      return {
        ...state,
        readmeLoading: false,
        readmeError: false,
        readme: action.payload.data,
      };
    case EActionType.FETCH_README_ERROR:
      return {
        ...state,
        readme: null,
        readmeError: true,
        readmeLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
