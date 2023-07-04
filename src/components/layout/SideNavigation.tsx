import { Drawer } from "@material-ui/core";
import { FC, ReactChild, ReactChildren, ReactElement } from "react";
import { useLayoutStyles } from "./styles/LayoutStyles";

export interface LayoutComponentProps {
    children?: Array<ReactChild> | ReactElement | ReactChildren
}

const SideNavigation: FC<LayoutComponentProps> = (props): ReactElement => {
    const { children } = props;
    const styles = useLayoutStyles();
    return (
        <Drawer
            className={styles.drawer}
            variant="permanent"
            classes={{
                paper: styles.drawerPaper,
            }}
            anchor="left">
            {children}
        </Drawer>
    )
}

export default SideNavigation;