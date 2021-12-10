import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { getPreviousPage } from "../../store/reducers/user";

export default function Header(props: HeaderProps = defaultProps): JSX.Element {
    const navigate = useNavigate();
    const previousPage = useSelector(getPreviousPage);
    const handleClick = () => {
        navigate(previousPage);
    };
    const { headerWidth = "100%" } = props;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={[
                    {
                        boxShadow: "none",
                        width: headerWidth,
                    },
                    (theme: any) => ({
                        [theme.breakpoints.down("sm")]: {
                            width: "100%",
                        },
                    }),
                ]}
                color={props.color || "inherit"}
            >
                <Toolbar>
                    {props.backArrow && (
                        <IconButton size="large" edge="start" aria-label="back button" onClick={handleClick} color={"default"} sx={{position: "absolute"}}>
                            <ArrowBackIcon data-testid="header-back-button" />
                        </IconButton>
                    )}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        color={props.color ? "white" : "default"}
                        data-testid="header-text"
                        textAlign="center">
                        {props.text}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export type HeaderProps = {
    text: string;
    backFunction?: () => void;
    color?: "inherit" | "transparent" | "default" | "primary" | "secondary" | undefined;
    headerWidth?: string;
    backArrow?: boolean;
};

const defaultProps: HeaderProps = {
    text: "Date a life",
    backFunction: () => {},
    color: "inherit",
    headerWidth: "100%",
    backArrow: false
};
