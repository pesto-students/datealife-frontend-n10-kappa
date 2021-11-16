import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ReactElement } from "react";

export default function Header(props: HeaderProps): ReactElement {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: "white", boxShadow: "none" }}>
                <Toolbar>
                    <IconButton size="large" edge="start" aria-label="menu" onClick={props.backFunction} color="error">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
}
