import { Dispatch } from 'redux';
import { EActionType } from './types';
import { setValue } from '../common';
import api from '../../../services/api';

export const fetchAllRepos =
  (username: string): any =>
  async (dispatch: Dispatch<any>) => {
    dispatch(setValue(EActionType.FETCH_REPO_REQUEST, null));
    try {
      const { data } = await api.get(
        `https://api.github.com/users/${username}/repos`
      );

      dispatch(setValue(EActionType.FETCH_REPO_SUCCESS, data));
    } catch (error) {
      dispatch(setValue(EActionType.FETCH_REPO_ERROR, null));
      console.error(error);
      // handle your error
    }
  };

export const getReadme =
  (owner: string, repoName: string, branch: string): any =>
  async (dispatch: Dispatch<any>) => {
    dispatch(setValue(EActionType.FETCH_README_REQUEST, null));
    try {
      const { data } = await api.get(
        `https://raw.githubusercontent.com/${owner}/${repoName}/${branch}/README.md`
      );

      dispatch(setValue(EActionType.FETCH_README_SUCCESS, data));
    } catch (error) {
      dispatch(setValue(EActionType.FETCH_README_ERROR, null));
      console.error(error);
      // handle your error
    }
  };
