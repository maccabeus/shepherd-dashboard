import { FC, ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { COLOR_GREEN, COLOR_GREY, COLOR_ORANGE } from "../../configs/StyleConstants";

export const useStyles = makeStyles((theme: Theme) => {

    // Define base stye for all buttons
    const baseStyle: any = {
        width: 12,
        height: 12,
        borderRadius: 2,
    }
    return (
        createStyles({
            green: {
                ...baseStyle,
                backgroundColor: COLOR_GREEN,
            },
            orange: {
                ...baseStyle,
                backgroundColor: COLOR_ORANGE,
            },
            red: {
                ...baseStyle,
                backgroundColor: "red",
            },
            grey: {
                ...baseStyle,
                backgroundColor: COLOR_GREY,
            },
        })
    )
}
)

export interface ElementProps {
    color: "green" | "orange" | "red" | "grey"
}

const Bullet: FC<ElementProps> = (props): ReactElement => {

    const styles = useStyles();
    const { color } = props;
    // default to grey
    let usedStyle= styles["grey"]

    if (color !== undefined) {
        usedStyle = styles[color]
    } 
    return (
        <div className={`${usedStyle}`} ></div>
    )
}

export default Bullet;