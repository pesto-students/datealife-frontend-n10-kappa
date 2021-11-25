import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { CometChat } from "@cometchat-pro/chat";

import { CometChatConversationList } from "..";
import { CometChatMessages } from "../../Messages";
import { CometChatIncomingCall, CometChatIncomingDirectCall } from "../../Calls";

import { CometChatContextProvider } from "../../../util/CometChatContext";
import * as enums from "../../../util/enums.js";

import Translator from "../../../resources/localization/translator";
import { theme } from "../../../resources/theme";

import { chatScreenStyle, chatScreenSidebarStyle, chatScreenMainStyle } from "./style";

class CometChatConversationListWithMessages extends React.Component {
    loggedInUser = null;

    constructor(props) {
        super(props);

        this.state = {
            tab: "conversations",
            sidebarview: false,
        };

        this.contextProviderRef = React.createRef();
        this.chatListRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.chatWithUser.length === 0) {
            this.toggleSideBar();
        }
    }

    itemClicked = (item, type) => {
        this.contextProviderRef.setTypeAndItem(type, item);
        this.toggleSideBar();
    };

    actionHandler = (action, item, count, ...otherProps) => {
        switch (action) {
            case enums.ACTIONS["TOGGLE_SIDEBAR"]:
                this.toggleSideBar();
                break;
            default:
                break;
        }
    };

    toggleSideBar = () => {
        const sidebarview = this.state.sidebarview;
        this.setState({ sidebarview: !sidebarview });
    };

    render() {
        let messageScreen = (
            <CometChatMessages
                theme={this.props.theme}
                lang={this.props.lang}
                _parent="conversations"
                actionGenerated={this.actionHandler}
            />
        );

        return (
            <CometChatContextProvider
                ref={(el) => (this.contextProviderRef = el)}
                user={this.props.chatWithUser}
                language={this.props.lang}
            >
                <div
                    css={chatScreenStyle(this.props)}
                    className="cometchat cometchat--chats"
                    dir={Translator.getDirection(this.props.lang)}
                >
                    <div css={chatScreenSidebarStyle(this.state, this.props)} className="chats__sidebar">
                        <CometChatConversationList
                            ref={(el) => (this.chatListRef = el)}
                            _parent="clwm"
                            theme={this.props.theme}
                            lang={this.props.lang}
                            onItemClick={this.itemClicked}
                            actionGenerated={this.actionHandler}
                        />
                    </div>
                    <div css={chatScreenMainStyle(this.state, this.props)} className="chats__main">
                        {messageScreen}
                    </div>
                    <CometChatIncomingCall theme={this.props.theme} lang={this.props.lang} actionGenerated={this.actionHandler} />
                    <CometChatIncomingDirectCall
                        theme={this.props.theme}
                        lang={this.props.lang}
                        actionGenerated={this.actionHandler}
                    />
                </div>
            </CometChatContextProvider>
        );
    }
}

// Specifies the default values for props:
CometChatConversationListWithMessages.defaultProps = {
    lang: Translator.getDefaultLanguage(),
    theme: theme,
    chatWithUser: "",
};

CometChatConversationListWithMessages.propTypes = {
    lang: PropTypes.string,
    theme: PropTypes.object,
    chatWithUser: PropTypes.string,
};

export { CometChatConversationListWithMessages };
