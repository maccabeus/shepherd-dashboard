import { FC, ReactChild, ReactChildren, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { COLOR_BLACK,COLOR_GREY, FONT_BODY, FONT_LARGE, FONT_MEDIUM, FONT_SMALL, FONT_TINY } from "../../configs/StyleConstants";

export const useTextStyles = makeStyles((theme: Theme) =>
    createStyles({
        tiny: {
            fontSize: FONT_TINY,
        },
        small: {
            fontSize: FONT_SMALL,
        },
        medium: {
            fontSize: FONT_MEDIUM,
        },
        body: {
            fontSize: FONT_BODY,
        },
        large: {
            fontSize: FONT_LARGE,
        },
    })
)

export interface BodyTextProps {
    size:  "small" | "medium" | "large" | "body" | "tiny"
    color?: "primary" | "secondary" | string
    fontWeight?: number | string
    children?: Array<ReactChild> | ReactElement | ReactChildren | string
}

const BodyText: FC<BodyTextProps> = (props): ReactElement => {

    const { children, color, fontWeight, size } = props;
    const styles = useTextStyles();
    let usedStyle: any
    let usedColor = COLOR_GREY;

    if (size === undefined) {
        usedStyle = styles["small"]
    } else {
        usedStyle = styles[size]
    }

    if (color !== undefined) {
        if (color === "primary") {
            usedColor = COLOR_GREY;
        } else if (color === "secondary") {
            usedColor = COLOR_BLACK;
        } else {
            usedColor= color
        }
    } 

    return (
        <div className={`${usedStyle}`} style={{
            color: usedColor,
            fontWeight: fontWeight !== undefined ? fontWeight : "normal"
        }} >
            {children}
        </div>
    )
}

export default BodyText