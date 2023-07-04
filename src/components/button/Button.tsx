import { FC, ReactChild, ReactChildren, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { BASE_APP_COLOR_WHITE, BUTTON_FONT_COLOR_MAIN, BUTTON_FONT_COLOR_WHITE, BUTTON_FONT_PADDING, BUTTON_FONT_SIZE, COLOR_GREY, FONT_BODY, FONT_LARGE, FONT_MEDIUM, FONT_SMALL, FONT_TINY } from "../../configs/StyleConstants";

export const useTextStyles = makeStyles((theme: Theme) => {

    // Define base stye for all buttons
    const baseStyle: any = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: BUTTON_FONT_PADDING,
        fontSize: BUTTON_FONT_SIZE,
    }
    return (
        createStyles({
            white: {
                ...baseStyle,
                backgroundColor: BASE_APP_COLOR_WHITE,

            },
            main: {
                ...baseStyle,
                backgroundColor: BASE_APP_COLOR_WHITE,
            },
        })
    )
}
)

export interface ElementProps {
    border: "solid" | "dotted"
    color: "white" | "main"
    icon?: Array<ReactChild> | ReactElement | ReactChildren
    children?: Array<ReactChild> | ReactElement | ReactChildren | string
}

const Button: FC<ElementProps> = (props): ReactElement => {

    const styles = useTextStyles();
    const { children, color, icon, border } = props;

    let usedStyle: any
    let fontColor: string
    if (color === undefined) {
        usedStyle = styles["white"]
        fontColor = BUTTON_FONT_COLOR_WHITE;
    } else {
        // color could either be white or main for now 
        usedStyle = styles[color]
        fontColor = color === "white" ? BUTTON_FONT_COLOR_WHITE : BUTTON_FONT_COLOR_MAIN;
    }
    return (
        <div className={`${usedStyle}`} style={{
            color: fontColor,
            borderStyle: border !== undefined ? border : "solid"
        }} >
            <div>{icon}</div>
            {children}
        </div>
    )
}

export default Button;