import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Header(props: HeaderProps): JSX.Element {
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
                color={props.color || "transparent"}
            >
                <Toolbar>
                    <IconButton size="large" edge="start" aria-label="back button" onClick={props.backFunction} color={"default"}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color={props.color ? "white" : "default"}>
                        {props.text}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

interface HeaderProps {
    text: string;
    backFunction: () => void;
    color?: "inherit" | "transparent" | "default" | "primary" | "secondary" | undefined;
    headerWidth?: string;
}
