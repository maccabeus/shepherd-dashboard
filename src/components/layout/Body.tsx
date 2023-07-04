import { FC, ReactChild, ReactChildren, ReactElement } from "react";
import { useLayoutStyles } from "./styles/LayoutStyles";

export interface LayoutComponentProps {
    children?: Array<ReactChild> | ReactElement | ReactChildren
}

const Body: FC<LayoutComponentProps> = (props): ReactElement => {
    const { children } = props;
    const styles = useLayoutStyles();
    return (
        <main className={styles.content}>
            {children}
        </main>
    )
}

export default Body;