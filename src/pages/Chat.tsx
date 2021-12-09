import { useParams } from "react-router";
import { Boxed, Layout } from "../components";
import { useChat } from "../effects/useChat";
import { CometChatConversationListWithMessages } from "../third-party/comet-chat";
import { Box, Container, CircularProgress } from "@mui/material";

const Chat = (): JSX.Element => {
    const cometUser = useChat();
    const { chatId = "" } = useParams();
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Chat",
                backFunction: () => {},
            }}
        >
            <Boxed type="error">
                <Container maxWidth="md">
                    <Box
                        style={{
                            height: "502px",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            paddingTop: "5px",
                        }}
                    >
                        {cometUser ? (
                            <CometChatConversationListWithMessages chatWithUser={chatId} />
                        ) : (
                            <CircularProgress sx={{ m: "auto" }} />
                        )}
                    </Box>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default Chat;
