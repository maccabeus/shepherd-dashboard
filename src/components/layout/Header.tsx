import { Box } from "@material-ui/core";
import { FC, ReactChild, ReactChildren, ReactElement } from "react";

export interface LayoutComponentProps {
    children?: Array<ReactChild> | ReactElement | ReactChildren
}

const Header: FC<LayoutComponentProps> = (props): ReactElement => {
    const { children } = props;
    return (
        <Box>
            {children}
        </Box>
    )
}

export default Header;