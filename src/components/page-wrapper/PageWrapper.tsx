import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import Navigation from "../navigator/Navigator";
import { ReactElement } from "react";

interface PageWrapperProps {
    children?: React.ReactNode;
}

const PageWrapper = (props: PageWrapperProps): ReactElement => {
    const navigate = useNavigate();
    const NavigatorItems = [
        {
            label: "Home",
            value: "/matchmaking",
            icon: <HomeOutlinedIcon />,
        },
        {
            label: "Learning",
            value: "/learning",
            icon: <LibraryBooksOutlinedIcon />,
        },
        {
            label: "Matches",
            value: "/likes",
            icon: <FavoriteIcon />,
        },
        {
            label: "Chat",
            value: "/chatting",
            icon: <ChatIcon />,
        },
    ];
    const handleNavigation = (selectedNavigation = "/") => {
        navigate(selectedNavigation);
    };
    return (
        <Grid container>
            <Grid item xs={12} sm={3}>
                <Navigation items={NavigatorItems} drawerWidth="25%" onNavigation={handleNavigation} />
            </Grid>
            <Grid item xs={12} sm={9}>
                {props.children}
            </Grid>
        </Grid>
    );
};

export default PageWrapper;
