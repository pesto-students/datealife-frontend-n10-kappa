import React, { useEffect } from "react";
import useWindowSize from "../../effects/useWindowResize";
import Drawer from "./Drawer";
import BottomNavigation from "./BottomNavigation";

export interface NavigatorItem {
    label: string;
    icon: React.ReactNode;
    value: string;
}

export interface NavigatorProps {
    items: NavigatorItem[];
    drawerWidth?: string;
    onNavigation?: (string: string) => void;
}

export default function Navigation(props: NavigatorProps): JSX.Element {
    const { items, onNavigation } = props;
    const [width] = useWindowSize();
    const [selectedValue, setSelectedValue] = React.useState("");

    useEffect(() => {
        onNavigation && onNavigation(selectedValue);
    }, [selectedValue]);

    return (
        <>
            {width <= 600 ? (
                <BottomNavigation items={items} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
            ) : (
                <Drawer {...props} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
            )}
        </>
    );
}
