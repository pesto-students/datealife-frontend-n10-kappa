import { CometChat } from "@cometchat-pro/chat";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { fbStorage } from "../firebase.config";
import { COMETCHAT_CONSTANTS } from "../third-party/comet-chat/consts";
import { UserInfo } from "../store/sagas/user/types";

export const getAge = (timeStamp: number): string => {
    const today = new Date();
    const birthDate = new Date(timeStamp);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age.toString();
};

export const uplaodImageToStorage = async (file: File, path: string): Promise<string> => {
    try {
        const storageRef = ref(fbStorage, path);
        // 'file' comes from the Blob or File API

        const uploadTask = await uploadBytesResumable(storageRef, file);
        // return the downloable url to be stored
        return await getDownloadURL(uploadTask.ref);
    } catch (error: any) {
        //console.log(error);
    }
    return "";
};

export const useCreateChatUser = async (user: UserInfo): Promise<string> => {
    if (user.uid) {
        const { AUTH_KEY } = COMETCHAT_CONSTANTS;
        const createUser = new CometChat.User(user?.uid);

        createUser.setName(user?.fullName || "");
        await CometChat.createUser(createUser, AUTH_KEY).then(() => {
            CometChat.login(user?.uid, AUTH_KEY).then((user: CometChat.User) => {});
        });
        return "user creation successfull";
    }
    return "userId is empty";
};
