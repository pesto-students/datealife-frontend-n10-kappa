import { CometChat } from "@cometchat-pro/chat";

import * as enums from "../../../util/enums.js";
import { UIKitSettings } from "../../../util/UIKitSettings";

export class ConversationListManager {
    conversationRequest = null;

    conversationListenerId = "chatlist_" + new Date().getTime();
    userListenerId = "chatlist_user_" + new Date().getTime();
    callListenerId = "chatlist_call_" + new Date().getTime();

    constructor(context) {
        const chatListMode = context.UIKitSettings.chatListMode;
        const chatListFilterOptions = UIKitSettings.chatListFilterOptions;

        switch (chatListMode) {
            case chatListFilterOptions["USERS"]:
                this.conversationRequest = new CometChat.ConversationsRequestBuilder()
                    .setConversationType(CometChat.ACTION_TYPE.TYPE_USER)
                    .setLimit(30)
                    .build();
                break;
            default:
                this.conversationRequest = new CometChat.ConversationsRequestBuilder().setLimit(30).build();
                break;
        }
    }

    fetchNextConversation() {
        return this.conversationRequest.fetchNext();
    }

    attachListeners(callback) {
        CometChat.addUserListener(
            this.userListenerId,
            new CometChat.UserListener({
                onUserOnline: (onlineUser) => {
                    /* when someuser/friend comes online, user will be received here */
                    callback(enums.USER_ONLINE, onlineUser);
                },
                onUserOffline: (offlineUser) => {
                    /* when someuser/friend went offline, user will be received here */
                    callback(enums.USER_OFFLINE, offlineUser);
                },
            })
        );

        CometChat.addMessageListener(
            this.conversationListenerId,
            new CometChat.MessageListener({
                onTextMessageReceived: (textMessage) => {
                    callback(enums.TEXT_MESSAGE_RECEIVED, null, textMessage);
                },
                onMediaMessageReceived: (mediaMessage) => {
                    callback(enums.MEDIA_MESSAGE_RECEIVED, null, mediaMessage);
                },
                onCustomMessageReceived: (customMessage) => {
                    callback(enums.CUSTOM_MESSAGE_RECEIVED, null, customMessage);
                },
                onMessageDeleted: (deletedMessage) => {
                    callback(enums.MESSAGE_DELETED, null, deletedMessage);
                },
                onMessageEdited: (editedMessage) => {
                    callback(enums.MESSAGE_EDITED, null, editedMessage);
                },
                onMessagesRead: (messageReceipt) => {
                    callback(enums.MESSAGE_READ, null, messageReceipt);
                },
            })
        );

        CometChat.addCallListener(
            this.callListenerId,
            new CometChat.CallListener({
                onIncomingCallReceived: (call) => {
                    callback(enums.INCOMING_CALL_RECEIVED, null, call);
                },
                onIncomingCallCancelled: (call) => {
                    callback(enums.INCOMING_CALL_CANCELLED, null, call);
                },
            })
        );
    }

    removeListeners() {
        CometChat.removeMessageListener(this.conversationListenerId);
        CometChat.removeUserListener(this.userListenerId);
        CometChat.removeCallListener(this.callListenerId);
    }
}
