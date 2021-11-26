import { useEffect } from "react";
import { StyledBody } from "../assets/styles/Common.styles";
import { CometChatConversationListWithMessages } from "../third-party/comet-chat";
import { Layout } from "../components";
import { CometChat } from "@cometchat-pro/chat";
import { COMETCHAT_CONSTANTS } from "../third-party/comet-chat/consts";

const Chat = (): JSX.Element => {
    useEffect(() => {
        const { TEST_USER_UUID, AUTH_KEY } = COMETCHAT_CONSTANTS;
        CometChat.login(TEST_USER_UUID, AUTH_KEY)
            .then((user) => {
                // console.log(user);
            })
            .catch((error) => {
                // console.log("CometChatLogin Failed", error);
                // dispatch(authFail(error));
            });
    }, []);
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Interests",
            }}
        >
            <StyledBody style={{ height: "502px", width: "100%", maxWidth: "90%" }}>
                <CometChatConversationListWithMessages />
            </StyledBody>
        </Layout>
    );
};

export default Chat;
