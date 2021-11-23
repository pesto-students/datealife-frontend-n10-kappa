export const chatScreenStyle = (props) => {
    return {
        display: "flex",
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
        fontFamily: `${props.theme.fontFamily}`,
        border: `1px solid ${props.theme.borderColor.primary}`,
        "*": {
            boxSizing: "border-box",
            fontFamily: `${props.theme.fontFamily}`,
            "::-webkit-scrollbar": {
                width: "8px",
                height: "4px",
            },
            "::-webkit-scrollbar-track": {
                background: "#ffffff00",
            },
            "::-webkit-scrollbar-thumb": {
                background: "#ccc",
                "&:hover": {
                    background: "#aaa",
                },
            },
        },
    };
};

export const chatScreenSidebarStyle = (state, props) => {
    const sidebarView = state.sidebarview
        ? {
              left: "1px",
              width: "100%",
          }
        : {};

    const mq = [...props.theme.breakPoints];

    return {
        width: "30%",
        borderRight: `1px solid ${props.theme.borderColor.primary}`,
        height: "500px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        "> .chats": {
            height: "calc(100% - 5px)",
        },
        [`@media ${mq[0]}`]: {
            position: "absolute!important",
            left: "-100%",
            top: "0",
            bottom: "0",
            width: "0",
            zIndex: "2",
            backgroundColor: `${props.theme.backgroundColor.white}`,
            transition: "all .3s ease-out",
            ...sidebarView,
        },
    };
};

export const chatScreenMainStyle = (state, props) => {
    const mq = [...props.theme.breakPoints];

    return {
        width: "70%",
        height: "100%",
        order: "2",
        display: "flex",
        flexDirection: "row",
        [`@media ${mq[1]}, ${mq[2]}`]: {
            width: "100%",
        },
    };
};
