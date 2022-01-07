import { createSlice } from "@reduxjs/toolkit";
import { deleteUser } from "../../auth";

import { FetchUserFailurePayload, UserInfo } from "../sagas/user/types";

type LoginState = {
    isLoggedIn: boolean;
    userInfo: UserInfo;
    isExistingUser: boolean;
    error?: string;
    currentPage: string;
    previousPage: string;
    isLoading: boolean;
};

type State = {
    user: LoginState;
};

const initialState: LoginState = {
    isLoggedIn: false,
    userInfo: {
        uid: "",
        fullName: "",
        gender: "",
        orientation: "",
        profession: "",
        profilePicture: "",
        interests: [],
        pictures: [],
        age: "",
        bioData: "",
        companyName: "",
        emailId: "",
    },
    isExistingUser: false,
    currentPage: "",
    previousPage: "",
    isLoading: false,
};

export const loginSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccessful: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            const { isLoggedIn, isExitingUser, user } = action.payload;
            if (user.uid) {
                const updatedUser = { ...state.userInfo, ...user };
                const { dob } = updatedUser;
                state.userInfo = updatedUser;
                localStorage.setItem("loggedInUserId", user.uid);
            }
            state.isExistingUser = isExitingUser;
            state.isLoggedIn = isLoggedIn;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userInfo = { ...initialState.userInfo };
            state.isExistingUser = false;
            state.currentPage = "";
            state.previousPage = "";
            localStorage.removeItem("loggedInUserId");
        },
        updateUser: (state, { payload }: { payload: UserInfo }) => {
            const { userInfo } = state;
            state.userInfo = { ...userInfo, ...payload };
        },
        updateError: (state, { payload }: { payload: FetchUserFailurePayload }) => {
            state.error = payload.error;
        },
        updatePage: (state, { payload }: { payload: string }) => {
            state.previousPage = state.currentPage;
            state.currentPage = payload;
        },
        deleteUserSuccessful: (state) => {
            deleteUser();
        },
        updateLoading: (state, action: { payload: boolean }) => {
            state.isLoading = action.payload;
        },
    },
});

export const getIsLoggedIn = (state: State): boolean => state.user.isLoggedIn;
export const getIsExistingUser = (state: State): boolean => state.user.isExistingUser;
export const getLoggedInUser = (state: State): UserInfo => state.user.userInfo;
export const getError = (state: State): string | undefined => state.user.error;
export const getCurrentPage = (state: State): string => state.user.currentPage;
export const getPreviousPage = (state: State): string => state.user.previousPage;
export const getLoggedInUserIdFromLS = (): string | null => localStorage.getItem("loggedInUserId");
export const getIsLoading = (state: State): boolean => state.user.isLoading;

// Action creators are generated for each case reducer function
export const { loginSuccessful, logout, updateUser, updateError, updatePage, deleteUserSuccessful, updateLoading } =
    loginSlice.actions;

export default loginSlice.reducer;
