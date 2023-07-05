import { FC, ReactChild, ReactChildren, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { BASE_APP_COLOR, BASE_APP_COLOR_WHITE, BUTTON_BORDER_RADIUS, BUTTON_FONT_COLOR_MAIN, BUTTON_FONT_COLOR_WHITE, BUTTON_FONT_PADDING, BUTTON_FONT_SIZE, BUTTON_WIDTH, COLOR_GREY, COLOR_LIGHT_GREEN, COLOR_LIGHT_GREY, FONT_BODY, FONT_LARGE, FONT_MEDIUM, FONT_SMALL, FONT_TINY } from "../../configs/StyleConstants";

export const useTextStyles = makeStyles((theme: Theme) => {

    // Define base stye for all buttons
    const baseStyle: any = {
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: BUTTON_FONT_PADDING,
        fontSize: BUTTON_FONT_SIZE,
        borderRadius: BUTTON_BORDER_RADIUS,
        width: BUTTON_WIDTH,
    }
    return (
        createStyles({
            white: {
                ...baseStyle,
                backgroundColor: BASE_APP_COLOR_WHITE,
                borderColor: COLOR_LIGHT_GREY,
                transition: "opacity 0.05s ease-in-out",
                '&:hover': {
                    backgroundColor: COLOR_LIGHT_GREY,
                    boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
                },
            },
            main: {
                ...baseStyle,
                backgroundColor: BASE_APP_COLOR,
            },
            icon: {
                marginRight: 5,
                marginTop: 3
            },
        })
    )
}
)

export interface ElementProps {
    border: "solid" | "dotted" | "dashed"
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
            <div className={styles.icon}>{icon}</div>
            {children}
        </div>
    )
}

export default Button;