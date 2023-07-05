import React, { FC, ReactChild, ReactChildren, ReactElement } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { BASE_APP_COLOR, BASE_APP_COLOR_WHITE, COLOR_GREY, COLOR_LIGHT_GREY, PADDING_SIDE } from '../../configs/StyleConstants';
import TimeViewCarousel from '../calendar/CalendarCarousel';
import BaseCard from '../card/BaseCard';
import EventCard from '../card/EventCard';
import TitleText from '../text/TitleText';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import BodyText from '../text/BodyText';

const useStyles = makeStyles((theme) => ({
    scheduleContainer: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        paddingTop: PADDING_SIDE,
        overflowY: 'auto',
        maxHeight:500,
        '-webkit-overflow-scrolling': 'touch',
    },
    eventTitle: {
        display: "flex",
        paddingLeft: 25,
        paddingTop: PADDING_SIDE,
        paddingBottom: PADDING_SIDE
    },
    actionIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        minWidth: 30,
        minHeight: 30,
        border: `1px solid ${COLOR_LIGHT_GREY}`,
    }
}));

export interface CardProps {
    children?: Array<ReactChild> | ReactElement | ReactChildren | string
}
const Schedule: FC<CardProps> = (props): ReactElement => {
    const classes = useStyles();
    const HeaderIcon = () => <TimerRoundedIcon style={{ fontSize: 15, color: BASE_APP_COLOR }} />
    const ActionHeader = () => {
        return (
            <Button className={classes.actionIcon} >
                <WorkRoundedIcon style={{ fontSize: 15, color: COLOR_GREY }} />
            </Button>
        )
    }

    return (
        <BaseCard
            padding={{ left: 5, right: 15, top: 0 }}
            maxHeight={500}
            backgroundColor={BASE_APP_COLOR_WHITE}
            showHeader
            title={<TitleText size="cardMedium" fontWeight={500}>Schedules</TitleText>}
            icon={<HeaderIcon />}
            action={<ActionHeader />}
        >
            <Grid className={classes.scheduleContainer}>
                <TimeViewCarousel />

                <div className={classes.eventTitle}>
                    <BodyText fontWeight={420} size="tiny" >Upcoming Events</BodyText>
                </div>
                <EventCard
                    topic='Mathematics lesson with John Simon'
                    type='green'
                    startTime='03:30 pm'
                    endTime='05:30 pm' />

                <EventCard
                    topic='Mathematics lesson with John Simon'
                    type='orange'
                    startTime='03:30 pm'
                    endTime='05:30 pm' />

                <div className={classes.eventTitle}>
                    <BodyText fontWeight={420} size="tiny" >Tomorrow</BodyText>
                </div>

                <EventCard
                    topic='Mathematics lesson with John Simon'
                    type='green'
                    startTime='03:30 pm'
                    endTime='05:30 pm' />

                <EventCard
                    topic='Mathematics lesson with John Simon'
                    type='orange'
                    startTime='03:30 pm'
                    endTime='05:30 pm' />

            </Grid>
        </BaseCard>
    );
}

export default Schedule;
