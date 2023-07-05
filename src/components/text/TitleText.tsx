import { FC, ReactChild, ReactChildren, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { COLOR_BLACK, COLOR_GREY, FONT_BODY, FONT_CARD_MEDIUM, FONT_CARD_TITLE, FONT_LARGE, FONT_MEDIUM, FONT_SMALL, FONT_TINY } from "../../configs/StyleConstants";

export const useTextStyles: any = makeStyles((theme: Theme) =>
    createStyles({
        tiny: {
            fontSize: FONT_TINY,
            fontWeight: "bold"
        },
        small: {
            fontSize: FONT_SMALL,
            fontWeight: "bold"
        },
        body: {
            fontSize: FONT_BODY,
            fontWeight: "bold"
        },
        medium: {
            fontSize: FONT_MEDIUM,
            fontWeight: "bold"
        },
        large: {
            fontSiz: FONT_LARGE,
            fontWeight: "bold"
        },
        card: {
            fontSize: FONT_CARD_TITLE,
            fontWeight: 600
        },
        cardMedium: {
            fontSize: FONT_CARD_MEDIUM,
            fontWeight: 600
        },
    })
)

export interface TitleTextProps {
    size: "small" | "medium" | "large" | "body" | "tiny" | "card" | "cardMedium"
    color?: "primary" | "secondary" | string
    fontWeight?: number | string
    children?: Array<ReactChild> | ReactElement | ReactChildren | string | number
}

const TitleText: FC<TitleTextProps> = (props): ReactElement => {

    const styles = useTextStyles();
    const { children, color, fontWeight, size } = props;

    let usedStyle: any
    let usedColor = COLOR_BLACK;

    if (size === undefined) {
        usedStyle = styles["medium"]
    } else {
        usedStyle = styles[size]
    }

    if (color !== undefined) {
        if (color === "primary") {
            usedColor = COLOR_BLACK;
        } else if (color === "secondary") {
            usedColor = COLOR_GREY;
        } else {
            usedColor= color
        }
    }

    return (
        <div className={`${usedStyle}`} style={{
            color: usedColor,
            fontWeight: fontWeight !== undefined ? fontWeight : "bold"
        }} >{children}</div>
    )
}

export default TitleText