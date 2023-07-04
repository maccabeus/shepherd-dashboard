import React, { FC, ReactChild, ReactChildren, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core';
import BaseCard from './BaseCard';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BodyText from '../text/BodyText';

const useStyles = makeStyles((theme) => ({

}));

export interface CardProps {
    children?: Array<ReactChild> | ReactElement | ReactChildren | string
}

const ActivityFeed: FC<CardProps> = (props): ReactElement => {
    // const classes = useStyles();
    const customStyle: any={
        
    }
    return (
        <BaseCard>
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }} >
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ m: 0, bgcolor: 'red' }}>
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ m: 0 }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <BodyText size='bodyTiny'>2 hrs ago</BodyText>
                        <BodyText size='bodySmall' color='secondary'  >You uploaded documents an hour ago</BodyText>
                    </TimelineContent>
                </TimelineItem>

            </Timeline>
        </BaseCard>
    );
}

export default ActivityFeed


