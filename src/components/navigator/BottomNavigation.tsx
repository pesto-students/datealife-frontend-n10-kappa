import MUIBottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { ReactElement } from "react";
import { NavigatorItem, NavigatorProps } from "./Navigator";
import { BottomNavigationContainer } from "./Navigator.style";

interface BottomNavigationProps extends NavigatorProps {
    selectedValue: string;
    setSelectedValue: (string: string) => void;
}

const BottomNavigation = ({ items = [], selectedValue, setSelectedValue }: BottomNavigationProps): ReactElement => (
    <BottomNavigationContainer elevation={3}>
        <MUIBottomNavigation
            value={selectedValue}
            onChange={(event: any, newValue: string) => {
                setSelectedValue(newValue);
            }}
        >
            {items.map(({ icon, label, value }: NavigatorItem) => (
                <BottomNavigationAction key={value} label={label} icon={icon} value={value} />
            ))}
        </MUIBottomNavigation>
    </BottomNavigationContainer>
);

export default BottomNavigation;
