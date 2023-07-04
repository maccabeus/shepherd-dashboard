import React, { FC, ReactChild, ReactChildren, ReactElement } from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { CARD_BORDER_RADIUS, CARD_PADDING, COLOR_LIGHT_GREY, CARD_MARGIN, CARD_MAX_WIDTH, CARD_SHADOW } from '../../configs/StyleConstants';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: CARD_MAX_WIDTH,
        marginTop: theme.spacing(2),
        backgroundColor: COLOR_LIGHT_GREY,
        borderRadius: CARD_BORDER_RADIUS,
        boxShadow: CARD_SHADOW,
        minHeight:350,
        height:'auto',
        border: `1px solid ${COLOR_LIGHT_GREY}`,
    },
    headerTitle: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: theme.spacing(1),
    },
}));

export interface Padding {
    left?: number 
    top?: number
    right?: number 
    bottom?: number
}
export interface CardProps {
    children?: Array<ReactChild> | ReactElement | ReactChildren
    padding?: Padding
    backgroundColor?: string

}

const BaseCard: FC<CardProps> = (props): ReactElement => {
    const classes = useStyles();
    const {padding, backgroundColor}= props
    let paddingSet: Padding={
        top:  padding && padding.top!==undefined ? padding.top : CARD_PADDING,
        left:  padding &&  padding.left!==undefined ?  padding.left :  CARD_MARGIN,
        right:  padding &&  padding.right!==undefined ?  padding.right :  CARD_MARGIN,
        bottom: padding &&  padding.bottom!==undefined ? padding.bottom:  CARD_MARGIN,
    }
    return (
        <Card className={classes.card} style={{
            paddingTop:paddingSet.top,
            paddingBottom:paddingSet.bottom,
            paddingRight:paddingSet.right,
            paddingLeft:paddingSet.left,
            backgroundColor:backgroundColor ??  COLOR_LIGHT_GREY,
            border: `1px solid ${COLOR_LIGHT_GREY}`,
        }}>
            {/* <TitleText size='medium'>Quiz Performance</TitleText> */}
            {props.children}
        </Card>
    );
}

export default BaseCard;
