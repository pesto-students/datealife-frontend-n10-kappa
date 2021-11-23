import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ReactElement } from "react";
import { NavigatorItem, NavigatorProps } from "./Navigator";
import { DrawerContainer } from "./Navigator.style";

export interface DrawerProps extends NavigatorProps {
    selectedValue: string;
    setSelectedValue: (string: string) => void;
}

const Drawer = ({ items = [], selectedValue, setSelectedValue, drawerWidth }: DrawerProps): ReactElement => {
    console.log(selectedValue);
    return (
        <DrawerContainer variant="permanent" anchor="left" drawerWidth={drawerWidth}>
            <List>
                {items.map(({ label, icon, value }: NavigatorItem) => (
                    <ListItemButton
                        key={value}
                        selected={value === selectedValue}
                        onClick={() => {
                            setSelectedValue(value);
                            console.log(value, selectedValue);
                        }}
                    >
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItemButton>
                ))}
            </List>
        </DrawerContainer>
    );
};

export default Drawer;
