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
    onNavigation: (string: string) => void;
    currentPage: string;
}

export default function Navigation(props: NavigatorProps): JSX.Element {
    const { items, onNavigation, currentPage = "" } = props;
    const [width] = useWindowSize();

    return (
        <>
            {width <= 600 ? (
                <BottomNavigation items={items} currentPage={currentPage} onNavigation={onNavigation} />
            ) : (
                <Drawer {...props} currentPage={currentPage} onNavigation={onNavigation} />
            )}
        </>
    );
}
