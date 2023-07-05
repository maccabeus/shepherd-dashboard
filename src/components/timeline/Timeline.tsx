import { FC, ReactChild, ReactChildren, ReactElement } from "react";
import { COLOR_LIGHT_GREY, COLOR_LIGHT_ORANGE} from "../../configs/StyleConstants";
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Timeline from '@mui/lab/Timeline';
import BodyText from "../text/BodyText";


export interface TimelineProps {
    children?: Array<ReactChild> | ReactElement | ReactChildren | string
}

export const AppTimeline: FC<TimelineProps> = (props): ReactElement => {
    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }} >
            {props.children}
        </Timeline>
    )
}

export interface TimelineItemProps {
    timeSlot: string
    children: string
    buttonText: string
    icon?: Array<ReactChild> | ReactElement | ReactChildren | string
    button?: Array<ReactChild> | ReactElement | ReactChildren | string
}

export const AppTimelineItem: FC<TimelineItemProps> = (props): ReactElement => {

    const { timeSlot, children, button, icon } = props;
    
    const customDotStyle: any = {
        m: 0,
        display:"flex",
        bgcolor: COLOR_LIGHT_ORANGE,
        boxShadow: "none",
        padding:1,
        maxWidth:40,
        maxHeight:40,
        alignItems: "center",
        justifyContent: "center",
    }
    const customLineStyle: any = { m: 0, bgcolor: COLOR_LIGHT_GREY }
    
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot sx={customDotStyle}>
                    {icon}
                </TimelineDot>
                <TimelineConnector sx={customLineStyle} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <BodyText size='tiny' fontWeight={500}>{timeSlot}</BodyText>
                <BodyText size='small' color='secondary'>{children}</BodyText>
                {button}
            </TimelineContent>
        </TimelineItem>
    )
}

export default AppTimeline;