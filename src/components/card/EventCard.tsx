import { FC, ReactChild, ReactChildren, ReactElement } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { CARD_IMAGE_TINY, CARD_MARGIN_SMALL, COLOR_GREEN, COLOR_LIGHT_GREEN, COLOR_LIGHT_ORANGE, COLOR_ORANGE, PADDING_SIDE, PADDING_SMALL } from '../../configs/StyleConstants';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BodyText from '../text/BodyText';
import Image from "../../assets/images/boy.png"


export const useStyles = makeStyles((theme: Theme) => {

    const baseStyle: any = {
        display: "flex",
        flexDirection: "column",
        height: 80,
        maxHeight: 100,
        borderRadius: 1,
        borderLeftWidth: 4,
        borderLeftStyle: "solid",
        padding: PADDING_SMALL,
        paddingLeft: PADDING_SIDE,
        marginBottom: CARD_MARGIN_SMALL,
        cursor: "pointer"
    }
    return (
        createStyles({
            green: {
                ...baseStyle,
                backgroundColor: COLOR_LIGHT_GREEN,
                borderLeftColor: COLOR_GREEN,
            },
            orange: {
                ...baseStyle,
                backgroundColor: COLOR_LIGHT_ORANGE,
                borderLeftColor: COLOR_ORANGE
            },
            imageList: {
                display: "flex",
                flexDirection: "row",
                '& > :not(:first-child)': {
                    marginLeft: theme.spacing(-1),
                },
            },
            imageItem: {
                borderRadius: "100%",
                border: "solid 2px",
                width: CARD_IMAGE_TINY,
                height: CARD_IMAGE_TINY,
                borderColor: "white",

            }
        })
    )
}
)

export interface CardProps {
    type: "green" | "orange"
    topic: string
    startTime: string
    endTime: string
    children?: Array<ReactChild> | ReactElement | ReactChildren | string
}
const EventCard: FC<CardProps> = (props): ReactElement => {
    const styles = useStyles();
    const { topic, type, startTime, endTime } = props;
    const style = styles[type];

    return (
        <>
            <div className={style}>
                <div><BodyText color="secondary" size="body">{topic}</BodyText ></div>
                <div>
                    <BodyText size="tiny" >{startTime} <ArrowForwardIcon style={{
                        fontSize: 10
                    }} /> {endTime}</BodyText>
                </div>
                <div className={styles.imageList}>
                    <img className={styles.imageItem} src={Image} alt="cloud logo" />
                    <img className={styles.imageItem} src={Image} alt="cloud logo" />
                </div>
            </div>
        </>
    );
}

export default EventCard;
