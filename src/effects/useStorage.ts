import { fbStorage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const uplaodImageToStorage = async (file: File, path: string): Promise<string> => {
    const storageRef = ref(fbStorage, path);
    // 'file' comes from the Blob or File API

    const uploadTask = uploadBytesResumable(storageRef, file);
    // return the downloable url to be stored
    return await getDownloadURL(uploadTask.snapshot.ref);
};

export default uplaodImageToStorage;
