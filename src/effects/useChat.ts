import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CometChat } from "@cometchat-pro/chat";

import { getLoggedInUser, updateError } from "../store/reducers/login";
import { COMETCHAT_CONSTANTS } from "../third-party/comet-chat/consts";

export const useChat = (): CometChat.User | undefined => {
    const dispatch = useDispatch();
    const user = useSelector(getLoggedInUser);
    const [cometUser, setCometUser] = useState<CometChat.User>();
    useEffect(() => {
        const { AUTH_KEY } = COMETCHAT_CONSTANTS;

        CometChat.getLoggedinUser().then(
            (loggedInUser) => {
                if (!loggedInUser) {
                    CometChat.login(user.uid, AUTH_KEY)
                        .then((user: CometChat.User) => {
                            setCometUser(user);
                        })
                        .catch((error: Error) => {
                            const createUser = new CometChat.User(user?.uid);

                            createUser.setName(user?.fullName || "");
                            CometChat.createUser(createUser, AUTH_KEY)
                                .then(() => {
                                    CometChat.login(user?.uid, AUTH_KEY)
                                        .then((user: CometChat.User) => {
                                            setCometUser(user);
                                        })
                                        .catch((error: Error) => {
                                            dispatch(updateError({ error: error?.message }));
                                        });
                                })
                                .catch((error: Error) => {
                                    dispatch(updateError({ error: error?.message }));
                                });
                        });
                    return;
                }
                setCometUser(loggedInUser);
            },
            (error) => {
                dispatch(updateError(error));
            }
        );

        return () => {
            CometChat.logout().then(
                () => {
                    // console.log("Logout completed successfully");
                },
                (error) => {
                    dispatch(updateError(error));
                }
            );
        };
    }, []);

    return cometUser;
};
