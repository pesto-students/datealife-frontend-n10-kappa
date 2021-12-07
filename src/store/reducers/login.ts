import { createSlice } from "@reduxjs/toolkit";
import { getAge } from "../../utils";

import { FetchUserFailurePayload, UserInfo } from "../sagas/user/types";

type LoginState = {
    isLoggedIn: boolean;
    user: UserInfo;
    isExistingUser: boolean;
    error?: string;
    currentPage: string;
    previousPage: string;
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
        age: "",
    },
    isExistingUser: false,
    currentPage: "",
    previousPage: "",
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
            if (user.uid) {
                const { dob } = user;
                user["age"] = getAge(dob);
                state.user = { ...state.user, ...user };
                localStorage.setItem("loggedInUserId", user.uid);
            }
            state.isExistingUser = isExitingUser;
            state.isLoggedIn = isLoggedIn;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = {};
            state.isExistingUser = false;
            localStorage.removeItem("loggedInUserId");
        },
        updateUser: (state, { payload }: { payload: UserInfo }) => {
            const { user } = state;
            if (user.dob) {
                user["age"] = getAge(user.dob);
            }
            state.user = { ...user, ...payload };
        },
        updateError: (state, { payload }: { payload: FetchUserFailurePayload }) => {
            state.error = payload.error;
        },
        updatePage: (state, { payload }: { payload: string }) => {
            state.previousPage = state.currentPage;
            state.currentPage = payload;
        },
    },
});

export const getIsLoggedIn = (state: State): boolean => state.login.isLoggedIn;
export const getIsExistingUser = (state: State): boolean => state.login.isExistingUser;
export const getLoggedInUser = (state: State): UserInfo => state.login.user;
export const getError = (state: State): string | undefined => state.login.error;
export const getCurrentPage = (state: State): string => state.login.currentPage;
export const getPreviousPage = (state: State): string => state.login.previousPage;
export const getLoggedInUserIdFromLS = (): string | null => localStorage.getItem("loggedInUserId");

// Action creators are generated for each case reducer function
export const { loginSuccessful, logout, updateUser, updateError, updatePage } = loginSlice.actions;

export default loginSlice.reducer;
