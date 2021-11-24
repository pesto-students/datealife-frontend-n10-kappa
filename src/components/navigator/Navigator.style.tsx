import Paper from "@mui/material/Paper";
import MuiDrawer, { DrawerProps as MUIDrawerProps } from "@mui/material/Drawer";
import styled from "styled-components";

interface DrawerContainerProps extends MUIDrawerProps {
    drawerWidth?: string;
}

const BottomNavigationContainer = styled(Paper)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1001;
`;

const DrawerContainer = styled(({ drawerWidth, ...restProps }) => <MuiDrawer {...restProps} />)<DrawerContainerProps>`
    && {
        width: ${({ drawerWidth = "25%" }: DrawerContainerProps) => drawerWidth};
        flex-shrink: 0;
    }
    && .MuiDrawer-paper {
        width: ${({ drawerWidth = "25%" }: DrawerContainerProps) => drawerWidth};
        box-sizing: border-box;
    }
`;

export { BottomNavigationContainer, DrawerContainer };
