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

const auth = getAuth(firebaseApp);

if (process.env.NODE_ENV === "development") {
    connectAuthEmulator(auth, "http://localhost:5003");
}

interface UpdatedWindow extends Window {
    recaptchaVerifier?: any;
    confirmationResult?: any;
}

export type ThirdPartyUser = {
    fullName?: string | null;
    uid?: string | null;
    profilePicture?: string | null;
};

export const thirdPartySignin = async (type: string): Promise<ThirdPartyUser> => {
    const provider = type === "google" ? new GoogleAuthProvider() : new FacebookAuthProvider();
    let loggedInUser = auth.currentUser;
    if (!loggedInUser) {
        const { user } = await signInWithPopup(auth, provider);
        loggedInUser = user;
    }
    return {
        fullName: loggedInUser?.displayName,
        uid: loggedInUser?.uid,
        profilePicture: loggedInUser?.photoURL,
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
    let loggedInUser = auth.currentUser;
    if (!loggedInUser) {
        const { user } = await (window as UpdatedWindow).confirmationResult.confirm(otp);
        loggedInUser = user;
    }
    return {
        fullName: loggedInUser?.displayName,
        uid: loggedInUser?.uid,
        profilePicture: loggedInUser?.photoURL,
    };
};

// after calling this method logout reducer action should be called
export const onSignOut = async (): Promise<any> => {
    await signOut(auth);
    return {};
};
