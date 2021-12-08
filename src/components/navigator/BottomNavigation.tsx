import MUIBottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { ReactElement } from "react";
import { NavigatorItem, NavigatorProps } from "./Navigator";
import { BottomNavigationContainer } from "./Navigator.style";

export interface BottomNavigationProps extends NavigatorProps {
    currentPage: string;
    onNavigation: (string: string) => void;
}

const BottomNavigation = ({ items = [], currentPage, onNavigation }: BottomNavigationProps): ReactElement => (
    <BottomNavigationContainer elevation={3}>
        <MUIBottomNavigation
            value={currentPage}
            onChange={(event: any, newValue: string) => {
                onNavigation(newValue);
            }}
        >
            {items.map(({ icon, label, value }: NavigatorItem) => (
                <BottomNavigationAction key={value} label={label} icon={icon} value={value} />
            ))}
        </MUIBottomNavigation>
    </BottomNavigationContainer>
);

export default BottomNavigation;
