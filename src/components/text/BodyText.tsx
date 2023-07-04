import { FC, ReactChild, ReactChildren, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { COLOR_GREY, FONT_BODY, FONT_LARGE, FONT_MEDIUM, FONT_SMALL, FONT_TINY } from "../../configs/StyleConstants";

export const useTextStyles = makeStyles((theme: Theme) =>
    createStyles({
        bodyTiny: {
            fontSiz: FONT_TINY,
        },
        bodySmall: {
            fontSiz: FONT_SMALL,
        },
        bodyMedium: {
            fontSiz: FONT_MEDIUM,
        },
        bodyMain: {
            fontSiz: FONT_BODY,
        },
        bodyLarge: {
            fontSiz: FONT_LARGE,
        },
    })
)

export interface BodyTextProps {
    size: "bodyTiny" |  "bodySmall" | "bodyMedium" | "bodyMain" | "bodyLarge"
    color?: "primary" | "secondary"
    fontWeight?: number | string
    children?: Array<ReactChild> | ReactElement | ReactChildren | string
}

const BodyText: FC<BodyTextProps> = (props): ReactElement => {

    const { children, color, fontWeight, size } = props;
    const styles = useTextStyles();
    let usedStyle: any

    if (size === undefined) {
        // default to bodySmall
        usedStyle = styles["bodySmall"]
    } else {
        usedStyle = styles[size]
    }
    return (
        <div className={`${usedStyle}`} style={{
            color: color !== undefined ? color : COLOR_GREY,
            fontWeight: fontWeight !== undefined ? fontWeight : "normal"
        }} >
            {children}
        </div>
    )
}

export default BodyText