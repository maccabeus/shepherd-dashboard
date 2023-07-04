import React, { FC, ReactChild, ReactChildren, ReactElement } from 'react';
import { CardContent, Typography, makeStyles, Grid, Divider } from '@material-ui/core';
import BaseCard from './BaseCard';
import TitleText from '../text/TitleText';
import { BASE_APP_COLOR_WHITE, CARD_BORDER_RADIUS, CARD_MARGIN, CARD_PADDING, COLOR_GREY, COLOR_LIGHT_GREY, FONT_BODY, FONT_TITLE } from '../../configs/StyleConstants';
import BodyText from '../text/BodyText';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: BASE_APP_COLOR_WHITE,
    },
    wrapper: {
        paddingTop: CARD_PADDING,
        paddingBottom: CARD_MARGIN,
        paddingRight: CARD_MARGIN,
        paddingLeft: CARD_MARGIN,
    },
    divider: {
        borderBottom: `1px solid ${COLOR_LIGHT_GREY}`,
    },
    content: {
        display: "flex",
        alignContent: "flex-start",
        flexDirection: "column",
        backgroundColor: "green",
    },
    contentLeft: {
        display: "flex",
        borderRight: `1px solid ${COLOR_LIGHT_GREY}`,
    },
    contentRight: {
        display: "flex"
    },
    timeCard: {
        display: "flex",
        flexDirection: "column",
        marginTop: CARD_PADDING,
    },
    timeCardValue: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "baseline",
        fontSize: FONT_TITLE,
        fontWeight: 800,
    },
    timeCardValueSub: {
        verticalAlign: "sup",
        marginTop: 10,
        fontSize: FONT_BODY,
        marginLeft: 5,
        marginRight: 10,
        color: COLOR_GREY,
        fontWeight: 300,
    },
   
    footer: {
        display: "flex",
        backgroundColor: COLOR_LIGHT_GREY,
        borderBottomLeftRadius: CARD_BORDER_RADIUS,
        borderBottomRightRadius: CARD_BORDER_RADIUS,
        padding: CARD_PADDING,
        paddingLeft: CARD_MARGIN,
    },
}));

export interface TimeStudied {
    hours: number
    minutes: number
    seconds: number
}
export interface CardProps {
    cardStudied?: number
    timeStudied?: TimeStudied
    carousel?: Array<ReactChild> | ReactElement | ReactChildren
}

const WeeklySummary: FC<CardProps> = (props): ReactElement => {
    const classes = useStyles();

    return (
        <BaseCard padding={{ top: 0, left: 0, right: 0 }} backgroundColor={`${BASE_APP_COLOR_WHITE}`}>
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <TitleText size='medium'>Weekly Summary</TitleText>
                </div>
                <Grid container spacing={2}>
                    <Grid className={classes.timeCard} item xs={6}>
                        <BodyText size='bodySmall' fontWeight={500}>Cards Studied</BodyText>
                        <div className={classes.timeCardValue}>
                            <TitleText size='large'>25</TitleText>
                            <div className={classes.timeCardValueSub}>cards</div>
                        </div>
                    </Grid>
                    <Grid className={classes.timeCard} item xs={6}>
                    <BodyText size='bodySmall' fontWeight={500}>Time Studied</BodyText>
                        <div className={classes.timeCardValue}>
                            <TitleText size='large'>05</TitleText>
                            <div className={classes.timeCardValueSub}>hrs</div>
                            <TitleText size='large'>03</TitleText>
                            <div className={classes.timeCardValueSub}>mins</div>
                        </div>

                    </Grid>
                </Grid>
            </div>
            <Divider className={classes.divider} />
            <div className={classes.wrapper}>
                <CardContent className={classes.content}>
                    <Grid container spacing={2}>
                        <Grid className={classes.contentLeft} item xs={6}>
                            <Typography variant="body1">Left Column</Typography>
                        </Grid>
                        <Grid className={classes.contentRight} item xs={6}>
                            <Typography variant="body1">Right Column</Typography>
                            {/* Add Carousel component here */}
                        </Grid>
                    </Grid>
                </CardContent>
            </div>

            <div className={classes.footer}>
                <BodyText size='bodySmall'>
                    <>
                        Current Streak : <strong>20 days</strong>
                    </>
                </BodyText>
            </div>

        </BaseCard>
    );
}

export default WeeklySummary;
