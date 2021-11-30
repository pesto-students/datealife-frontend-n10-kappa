import { createSlice } from "@reduxjs/toolkit";
import { FetchUserFailurePayload } from "../sagas/user/types";

export type UserInfo = {
    uid?: string;
    fullName?: string;
    profilePicture?: string;
    dob?: number;
    gender?: string;
    orientation?: string;
    profession?: string;
    interests?: string[];
    pictures?: string[];
};
type loginState = {
    isLoggedIn: boolean;
    user: UserInfo;
    isExistingUser: boolean;
    error?: {
        message?: string;
    };
};

const initialState: loginState = {
    isLoggedIn: false,
    user: {
        fullName: "",
        gender: "",
        orientation: "",
        profession: "",
        profilePicture: "",
        interests: [],
        pictures: [],
    },
    isExistingUser: false,
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
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = {};
            state.isExistingUser = false;
        },
        updateUser: (state, { payload }: { payload: UserInfo }) => {
            state.user = { ...state.user, ...payload };
        },
        updateError: (state, { payload }: { payload: FetchUserFailurePayload }) => {
            state.error = payload;
        },
    },
});

export const getIsLoggedIn = (state: { login: loginState }): boolean => state.login.isLoggedIn;
export const getIsExistingUser = (state: { login: loginState }): boolean => state.login.isExistingUser;
export const getLoggedInUser = (state: { login: loginState }): UserInfo => state.login.user;
export const getError = (state: { login: loginState }): { message?: string } | undefined => state.login.error;

// Action creators are generated for each case reducer function
export const { loginSuccessful, logout, updateUser, updateError } = loginSlice.actions;

export default loginSlice.reducer;
