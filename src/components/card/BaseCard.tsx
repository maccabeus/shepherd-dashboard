import { FC, ReactChild, ReactChildren, ReactElement, ReactNode } from 'react';
import { Card, CardHeader, Divider, makeStyles } from '@material-ui/core';
import { CARD_BORDER_RADIUS, CARD_PADDING, COLOR_LIGHT_GREY, CARD_MARGIN, CARD_MAX_WIDTH, CARD_SHADOW, CARD_MARGIN_SMALL } from '../../configs/StyleConstants';


const DEFAULT_MIN_HEIGHT = 350;

const useStyles = makeStyles((theme) => ({
    card: {
        display: "flex",
        flexDirection: "column",
        maxWidth: CARD_MAX_WIDTH,
        marginTop: CARD_MARGIN_SMALL,
        backgroundColor: COLOR_LIGHT_GREY,
        borderRadius: CARD_BORDER_RADIUS,
        boxShadow: CARD_SHADOW,
        height: 'auto',
        border: `1px solid ${COLOR_LIGHT_GREY}`,
        cursor: "pointer",
        overflowY: 'auto',
        '-webkit-overflow-scrolling': 'touch',
    },
    cardHeader: {
        marginBottom: 0,
    },
    divider: {
        borderBottom: `1px solid ${COLOR_LIGHT_GREY}`,
    },
}));

export interface Padding {
    left?: number
    top?: number
    right?: number
    bottom?: number
}
export interface CardProps {
    showHeader?: boolean
    hideHeaderDivider?: boolean
    children?: Array<ReactChild> | ReactElement | ReactChildren
    icon?: Array<ReactChild> | ReactElement | ReactChildren
    action?: Array<ReactChild> | ReactElement | ReactChildren
    title?: Array<ReactChild> | ReactElement | ReactChildren | string
    subHeader?: ReactNode
    padding?: Padding
    backgroundColor?: string
    minHeight?: number
    maxHeight?: number
}

const BaseCard: FC<CardProps> = (props): ReactElement => {

    const classes = useStyles();
    const { padding, backgroundColor } = props;

    let paddingSet: Padding = {
        top: padding && padding.top !== undefined ? padding.top : CARD_PADDING,
        left: padding && padding.left !== undefined ? padding.left : CARD_MARGIN,
        right: padding && padding.right !== undefined ? padding.right : CARD_MARGIN,
        bottom: padding && padding.bottom !== undefined ? padding.bottom : CARD_MARGIN,
    }
    const useMinHeight = props.minHeight !== undefined ? props.minHeight : DEFAULT_MIN_HEIGHT;
    const useMaxHeight = props.maxHeight !== undefined ? props.maxHeight : '';

    const Header = () => {
        if (!props.showHeader) {
            return <></>
        }
        const head = <CardHeader
            avatar={props.icon}
            action={props.action}
            title={props.title}
            subheader={props.subHeader}
            className={classes.cardHeader}
        />
        if (props.hideHeaderDivider === true) {
            return (
                <>
                    {head}
                </>
            )
        } else {
            return <>
                {head}
                <Divider className={classes.divider} />
            </>
        }
    }
    return (
        <Card className={classes.card} style={{
            paddingTop: paddingSet.top,
            paddingBottom: paddingSet.bottom,
            paddingRight: paddingSet.right,
            paddingLeft: paddingSet.left,
            backgroundColor: backgroundColor ?? COLOR_LIGHT_GREY,
            border: `1px solid ${COLOR_LIGHT_GREY}`,
            minHeight: useMinHeight,
            maxHeight: useMaxHeight
        }}>
            <Header />
            {props.children}
        </Card>
    );
}

export default BaseCard;
