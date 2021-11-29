import { createSlice } from "@reduxjs/toolkit";

type loginState = {
    isLoggedIn: boolean;
    user: {
        uid?: string;
        fullName?: string;
        profilePicture?: string;
        age?: string;
        gender?: string;
        orientation?: string;
        profession?: string;
        interests?: string[];
    };
    isExistingUser: boolean;
};

const initialState: loginState = {
    isLoggedIn: false,
    user: {
        fullName: "",
        age: "",
        gender: "",
        orientation: "",
        profession: "",
        profilePicture: "",
        interests: [],
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
            state.user = user;
            state.isExistingUser = isExitingUser;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = {};
            state.isExistingUser = false;
        },
    },
});

export const isLoggedIn = (state: { login: loginState }): boolean => state.login.isLoggedIn;

// Action creators are generated for each case reducer function
export const { loginSuccessful, logout } = loginSlice.actions;

export default loginSlice.reducer;
