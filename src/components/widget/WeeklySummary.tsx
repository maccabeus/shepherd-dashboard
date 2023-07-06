import { FC, ReactChild, ReactChildren, ReactElement } from 'react';
import { CardContent, makeStyles, Grid, Divider } from '@material-ui/core';
import TitleText from '../text/TitleText';
import {
    BASE_APP_COLOR_WHITE, CARD_BORDER_RADIUS, CARD_MARGIN, CARD_MIN_SUMMARY, CARD_PADDING,
    COLOR_GREY, COLOR_LIGHT_GREY, COLOR_ORANGE, FONT_BODY, FONT_TITLE, PADDING_SMALL, PADDING_TINY
} from '../../configs/StyleConstants';
import BodyText from '../text/BodyText';
import InfoIcon from '@mui/icons-material/Info';
import BoltIcon from '@mui/icons-material/Bolt';
import Bullet from '../bullet/Bullet';
import BaseCard from '../card/BaseCard';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import Carousel, { CarouselItems } from '../carousel/Carousel';
import TimeCard from '../card/TimeCard';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: BASE_APP_COLOR_WHITE,
    },
    wrapper: {
        paddingBottom: CARD_MARGIN,
        paddingRight: CARD_MARGIN,
        paddingLeft: CARD_MARGIN,
    },
    divider: {
        borderBottom: `1px solid ${COLOR_LIGHT_GREY}`,
    },
    content: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        minHeight: CARD_MIN_SUMMARY,
        height: "auto"
    },
    contentLeft: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        borderRight: `1px solid ${COLOR_LIGHT_GREY}`,
        height: "inherit"
    },
    contentLeftHeader: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5
    },
    contentLeftHeaderIcon: {
        marginLeft: 5,
        color: COLOR_GREY,
    },
    contentLeftRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginTop: PADDING_SMALL
    },
    contentLeftBullet: {
        display: "flex",
        marginRight: PADDING_TINY
    },
    contentLeftValue: {
        display: "flex",
        marginLeft: "auto",
        marginRight: 15,
    },
    contentRight: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "inherit",
        padding: 0
    },
    timeCard: {
        display: "flex",
        flexDirection: "column",
        marginTop: CARD_PADDING,
    },
    timeCardValue: {
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        fontSize: FONT_TITLE,
        fontWeight: 800,
    },
    timeCardValueSub: {
        top: -10,
        fontSize: FONT_BODY,
        marginLeft: 5,
        marginRight: 10,
        color: COLOR_GREY,
        fontWeight: 450,
    },

    footer: {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
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

    const HeaderIcon = () => <DifferenceOutlinedIcon style={{ fontSize: 18, color: COLOR_GREY }} />
    const FooterIcon = () => <BoltIcon style={{ fontSize: 18, color: COLOR_ORANGE }} />

    const carouselItems: CarouselItems = [
        <TimeCard type="mid" value={70} text="You have studied 10m/1hr today" />,
        <TimeCard type="fire"
            text="You have studied 5m/1hr today"
            title="You've learnt for 5 hours this week"
        />,
        <TimeCard type="zap"
            title="You're on 3 days streak"
            text="Your rating and score have improved!"
        />
    ]
    return (
        <div style={{ position: "relative" }}>
            <BaseCard
                minHeight={380}
                padding={{ top: 0, left: 0, right: 0 }}
                backgroundColor={BASE_APP_COLOR_WHITE}
                showHeader
                hideHeaderDivider
                title={<TitleText size="card">Weekly Summary</TitleText>}
                icon={<HeaderIcon />}
            >
                <div className={classes.wrapper}>
                    <Grid container spacing={2}>
                        <Grid className={classes.timeCard} item xs={6}>
                            <BodyText size='small' fontWeight={500}>Cards Studied</BodyText>
                            <div className={classes.timeCardValue}>
                                <TitleText size='large'>25
                                    <span className={classes.timeCardValueSub}>cards</span>
                                </TitleText>
                            </div>
                        </Grid>
                        <Grid className={classes.timeCard} item xs={6}>
                            <BodyText size='small' fontWeight={500}>Time Studied</BodyText>
                            <div className={classes.timeCardValue}>
                                <TitleText size='large'>05
                                    <span className={classes.timeCardValueSub}>hrs</span>
                                </TitleText>
                                <TitleText size='large'>03
                                    <span className={classes.timeCardValueSub}>mins</span>
                                </TitleText>
                            </div>

                        </Grid>
                    </Grid>
                </div>
                <Divider className={classes.divider} />
                <CardContent className={classes.content}>
                    <Grid container spacing={2}>
                        <Grid className={classes.contentLeft} item xs={6}>
                            <div className={classes.contentLeftHeader}>
                                <BodyText size='small' fontWeight={500}>
                                    Flashcard Performance
                                </BodyText>
                                <InfoIcon style={{ fontSize: 18 }} className={classes.contentLeftHeaderIcon} />
                            </div>
                            <div className={classes.contentLeftRow}>
                                <div className={classes.contentLeftBullet}>
                                    <Bullet color='green' />
                                </div>
                                <BodyText size="body">Got it right</BodyText>
                                <div className={classes.contentLeftValue}>
                                    <TitleText color='secondary' size='body' >60%</TitleText>
                                </div>
                            </div>
                            <div className={classes.contentLeftRow}>
                                <div className={classes.contentLeftBullet}>
                                    <Bullet color='orange' />
                                </div>
                                <BodyText size="body">Didn't remember</BodyText>
                                <div className={classes.contentLeftValue}>
                                    <TitleText color='secondary' size='body' >40%</TitleText>
                                </div>
                            </div>
                            <div className={classes.contentLeftRow}>
                                <div className={classes.contentLeftBullet}>
                                    <Bullet color='red' />
                                </div>
                                <BodyText size="body">Got it wrong</BodyText>
                                <div className={classes.contentLeftValue}>
                                    <TitleText color='secondary' size='body' >10%</TitleText>
                                </div>
                            </div>

                        </Grid>
                        <Grid className={classes.contentRight} item xs={6}>
                            <Carousel items={carouselItems} />
                        </Grid>
                    </Grid>
                </CardContent>

                <div className={classes.footer}>
                    <FooterIcon />
                    <BodyText size='small'>Current Streak:</BodyText>
                    <TitleText size="small"> &nbsp;20 days</TitleText>
                </div>

            </BaseCard>
        </div>

    );
}

export default WeeklySummary;
