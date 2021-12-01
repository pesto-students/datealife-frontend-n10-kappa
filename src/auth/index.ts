import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signOut,
    signInWithPhoneNumber,
    RecaptchaVerifier,
    connectAuthEmulator,
} from "firebase/auth";

import { firebaseApp } from "../firebase.config";
import { UserInfo } from "../store/sagas/user/types";

export const auth = getAuth(firebaseApp);

if (process.env.NODE_ENV === "development") {
    connectAuthEmulator(auth, "http://localhost:5003");
}

interface UpdatedWindow extends Window {
    recaptchaVerifier?: any;
    confirmationResult?: any;
}

export interface ThirdPartyUser extends UserInfo {
    fullName?: string;
    uid?: string;
    profilePicture?: string;
}

export const thirdPartySignin = async (type: string, isExistingUser: boolean): Promise<ThirdPartyUser> => {
    const provider = type === "google" ? new GoogleAuthProvider() : new FacebookAuthProvider();
    let { currentUser } = auth;
    if (!currentUser || !isExistingUser) {
        const { user } = await signInWithPopup(auth, provider);
        currentUser = user;
    }
    return {
        fullName: currentUser?.displayName as string,
        uid: currentUser?.uid as string,
        profilePicture: currentUser?.photoURL as string,
    };
};

export const loginWithPhoneNumber = async (phoneNumber: string): Promise<any> => {
    (window as UpdatedWindow).recaptchaVerifier = new RecaptchaVerifier(
        //this is the id of the button for phonenumber submission
        "login-with-number",
        {
            size: "invisible",
        },
        auth
    );
    const appVerifier = (window as UpdatedWindow)?.recaptchaVerifier;
    (window as UpdatedWindow).confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);

    return;
};

export const confirmOtp = async (otp: string): Promise<ThirdPartyUser> => {
    let { currentUser } = auth;
    if (!currentUser) {
        const { user } = await (window as UpdatedWindow).confirmationResult.confirm(otp);
        currentUser = user;
    }
    return {
        fullName: currentUser?.displayName as string,
        uid: currentUser?.uid as string,
        profilePicture: currentUser?.photoURL as string,
    };
};

// after calling this method logout reducer action should be called
export const onSignOut = async (): Promise<any> => {
    await signOut(auth);
    return {};
};
