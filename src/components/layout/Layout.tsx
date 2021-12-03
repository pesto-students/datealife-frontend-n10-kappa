import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Navigator, Header, HeaderProps } from "../";

const Layout = (props: LayoutProps): JSX.Element => {
    const { children, hasDrawer, drawerWidth = 3, headerProps } = props;
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
    const calcDrawerWidth = (drawerWidth / 12) * 100;
    const headerWidth = hasDrawer ? 100 - calcDrawerWidth : 100;
    return (
        <Grid container>
            {hasDrawer && (
                <Grid item xs={12} sm={3}>
                    <Navigator
                        items={NavigatorItems}
                        drawerWidth={`${calcDrawerWidth}%`}
                        onNavigation={handleNavigation}
                        defaultValue="/matchmaking"
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={hasDrawer ? 9 : 12}>
                {props.displayHeader && (
                    <Header
                        {...headerProps}
                        headerWidth={`${headerWidth}%`}
                    />
                )}
                {children}
            </Grid>
        </Grid>
    );
};

interface LayoutProps {
    children?: React.ReactNode;
    hasDrawer?: boolean;
    drawerWidth?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    headerProps: HeaderProps;
    displayHeader?: boolean;
}

const defaultProps: LayoutProps = {
    displayHeader: true,
    headerProps: {} as HeaderProps,
};

Layout.defaultProps = defaultProps;

export default Layout;
