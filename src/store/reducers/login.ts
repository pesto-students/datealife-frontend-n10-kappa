import { createSlice } from "@reduxjs/toolkit";

import { FetchUserFailurePayload, UserInfo } from "../sagas/user/types";

type LoginState = {
    isLoggedIn: boolean;
    user: UserInfo;
    isExistingUser: boolean;
    error?: string;
    currentPage: string;
};

type State = {
    login: LoginState;
};

const initialState: LoginState = {
    isLoggedIn: false,
    user: {
        uid: "",
        fullName: "",
        gender: "",
        orientation: "",
        profession: "",
        profilePicture: "",
        interests: [],
        pictures: [],
    },
    isExistingUser: false,
    currentPage: "",
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginSuccessful: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            const { isLoggedIn, isExitingUser, user } = action.payload;
            state.isLoggedIn = isLoggedIn;
            state.user = { ...state.user, ...user };
            state.isExistingUser = isExitingUser;
            user.uid && localStorage.setItem("loggedInUserId", user.uid);
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = {};
            state.isExistingUser = false;
            localStorage.removeItem("loggedInUserId");
        },
        updateUser: (state, { payload }: { payload: UserInfo }) => {
            state.user = { ...state.user, ...payload };
        },
        updateError: (state, { payload }: { payload: FetchUserFailurePayload }) => {
            state.error = payload.error;
        },
        updateCurrentPage: (state, { payload }: { payload: string }) => {
            state.currentPage = payload;
        },
    },
});

export const getIsLoggedIn = (state: State): boolean => state.login.isLoggedIn;
export const getIsExistingUser = (state: State): boolean => state.login.isExistingUser;
export const getLoggedInUser = (state: State): UserInfo => state.login.user;
export const getError = (state: State): string | undefined => state.login.error;
export const getCurrentPage = (state: State): string => state.login.currentPage;
export const getLoggedInUserIdFromLS = (): string | null => localStorage.getItem("loggedInUserId");

// Action creators are generated for each case reducer function
export const { loginSuccessful, logout, updateUser, updateError, updateCurrentPage } = loginSlice.actions;

export default loginSlice.reducer;
