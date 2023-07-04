import { FC, ReactChild, ReactChildren, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { BASE_APP_COLOR_WHITE, BASE_APP_TEXT_COLOR, FONT_LARGE, FONT_MEDIUM, FONT_SMALL } from "../../configs/StyleConstants";

export const useTextStyles: any = makeStyles((theme: Theme) =>
    createStyles({
        small: {
            color: BASE_APP_TEXT_COLOR,
            fontSize: FONT_SMALL,
            fontWeight: "bold"
        },
        medium: {
            color: BASE_APP_TEXT_COLOR,
            fontSize: FONT_MEDIUM,
            fontWeight: "bold"
        },
        large: {
            color: BASE_APP_TEXT_COLOR,
            fontSiz: FONT_LARGE,
            fontWeight: "bold"
        },
    })
)

export interface TitleTextProps {
    size: "small" | "medium" | "large"
    color?: "primary" | "secondary"
    fontWeight?: number | string
    children?: Array<ReactChild> | ReactElement | ReactChildren | string
}

const TitleText: FC<TitleTextProps> = (props): ReactElement => {
    const styles = useTextStyles();
    const { children, color, fontWeight, size } = props;
    let usedStyle: any
    if (size === undefined) {
        // default to bodyOne
        usedStyle = styles["medium"]
    } else {
        usedStyle = styles[size]
    }
    return (
        <div className={`${usedStyle}`} style={{
            color: color !== undefined ? color : BASE_APP_TEXT_COLOR,
            fontWeight: fontWeight !== undefined ? fontWeight : "bold"
        }} >{children}</div>
    )
}

export default TitleText