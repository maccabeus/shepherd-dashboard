import { CssBaseline } from "@material-ui/core";
import { FC, ReactChild, ReactChildren, ReactElement } from "react";
import { useLayoutStyles } from "./styles/LayoutStyles";

export interface LayoutComponentProps {
    children?: Array<ReactChild> | ReactElement | ReactChildren
}

const MainLayout: FC<LayoutComponentProps> = (props): ReactElement => {
    const { children } = props;
    const styles = useLayoutStyles();
    return (
        <div className={styles.root}>
            <CssBaseline />
            {children}
        </div>
    )
}

export default MainLayout;