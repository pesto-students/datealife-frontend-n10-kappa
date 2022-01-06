import { ReactChild, ReactChildren } from "react";
import Box from "@mui/material/Box";

const Boxed = (props: BoxedProps): JSX.Element => {
    let styleProps;
    switch (props.type) {
        case "main":
            styleProps = { padding: "20px 40px" };
            break;
        case "full":
            styleProps = { padding: "60px 45px" };
            break;
        case "textField":
            styleProps = { margin: "64px 0 93px", width: "100%" };
            break;
        case "textField2":
            styleProps = { margin: "64px 0", width: "100%" };
            break;
        case "backgroundShine":
            styleProps = {
                background: "linear-gradient(0deg, #f56e65 0%, #f66699 33.85%, #9b8af4 100%)",
                width: "100",
                height: "100vh",
                minHeight: "700px",
            };
            break;
        case "backgroundShine2":
            styleProps = {
                background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #BE413E 0%, rgba(231, 122, 71, 0.97) 103.2%)",
                height: "100vh",
                minHeight: "700px",
                width: "100",
            };
            break;
        case "invites":
            styleProps = {
                height: "350px",
                width: "100%",
                background: "linear-gradient(0deg, #f56e65 0%, #f66699 33.85%, #9b8af4 100%)",
            };
            break;
        case "error":
            styleProps = { padding: "60px 0" };
            break;
        case "learningPage":
            styleProps = { padding: "20px 0" };
            break;
        default:
            styleProps = { padding: "20px 40px" };
            break;
    }
    return (
        <Box sx={styleProps} data-testid="boxed">
            {props.children}
        </Box>
    );
};

interface BoxedProps {
    children: ReactChild | ReactChildren;
    type?: string;
}

export default Boxed;
