import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CometChat } from "@cometchat-pro/chat";
import { getLoggedInUser, updateError } from "../store/reducers/user";
import { COMETCHAT_CONSTANTS } from "../const";

export const useChat = (): CometChat.User | undefined => {
    const user = useSelector(getLoggedInUser);
    const [cometUser, setCometUser] = useState<CometChat.User>();
    useEffect(() => {
        const { AUTH_KEY } = COMETCHAT_CONSTANTS;

        if (user.uid) {
            CometChat.login(user.uid, AUTH_KEY)
                .then((user: CometChat.User) => {
                    setCometUser(user);
                })
                .catch(() => {
                    const createUser = new CometChat.User(user?.uid);

                    createUser.setName(user?.fullName || "");
                    CometChat.createUser(createUser, AUTH_KEY).then(() => {
                        CometChat.login(user?.uid, AUTH_KEY).then((user: CometChat.User) => {
                            setCometUser(user);
                        });
                    });
                });
        }

        return () => {
            CometChat.logout().then(
                () => {
                    setCometUser({} as CometChat.User);
                },
                (error) => {}
            );
        };
    }, [user.uid]);

    return cometUser;
};
