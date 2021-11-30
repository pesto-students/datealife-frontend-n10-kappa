import { useParams } from "react-router";

import CircularProgress from "@mui/material/CircularProgress";

import { Layout } from "../components";
import { useChat } from "../effects/useChat";
import { CometChatConversationListWithMessages } from "../third-party/comet-chat";
import { StyledBody } from "../assets/styles/Common.styles";

const Chat = (): JSX.Element => {
    const cometUser = useChat();
    const { chatId = "" } = useParams();
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Interests",
                color: "secondary",
                backFunction: () => {},
            }}
        >
            <StyledBody style={{ height: "502px", width: "100%", maxWidth: "90%", display: "flex", alignItems: "center" }}>
                {cometUser ? (
                    <CometChatConversationListWithMessages chatWithUser={chatId} />
                ) : (
                    <CircularProgress sx={{ m: "auto" }} />
                )}
            </StyledBody>
        </Layout>
    );
};

export default Chat;
