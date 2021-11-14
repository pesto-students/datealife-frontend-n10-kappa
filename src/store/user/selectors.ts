import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getUsers = (state: AppState) => state.user.users;

const getError = (state: AppState) => state.user.error;

const getLoading = (state: AppState) => state.user.loading;

export const getUsersSelector = createSelector(getUsers, (users) => users);

export const getErrorSelector = createSelector(getError, (error) => error);

export const getLoadingSelector = createSelector(
	getLoading,
	(loading) => loading
);
