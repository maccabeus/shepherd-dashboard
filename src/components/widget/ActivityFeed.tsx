import { FC, ReactChild, ReactChildren, ReactElement } from 'react';
import BaseCard from '../card/BaseCard';
import AppTimeline, { AppTimelineItem } from '../timeline/Timeline';
import DescriptionIcon from '@mui/icons-material/Description';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import Button from '../button/Button';
import { BASE_APP_COLOR, BASE_APP_COLOR_WHITE, COLOR_ORANGE } from '../../configs/StyleConstants';
import BoltIcon from '@mui/icons-material/Bolt';
import TitleText from '../text/TitleText';
import AppDatePicker from '../date/DatePicker';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerAction: {
            maxHeight: 30,
            maxWeight: 50,
        },
    })
)

export interface CardProps {
    children?: Array<ReactChild> | ReactElement | ReactChildren | string
}
const ActivityFeed: FC<CardProps> = (props): ReactElement => {
    const classes = useStyles();

    const customDotIcon: any = { color: COLOR_ORANGE, fontSize: 20 }
    const customButtonIcon: any = { fontSize: 14 }
    const HeaderIcon = () => <BoltIcon style={{ fontSize: 18, color: BASE_APP_COLOR }} />

    const ActionHeader = () => {
        return (
            <div className={classes.headerAction}>
                <AppDatePicker />
            </div>
        )
    }

    return (
        <BaseCard
            padding={{ left: 5, right: 15, top: 0 }}
            maxHeight={500}
            backgroundColor={BASE_APP_COLOR_WHITE}
            showHeader
            title={<TitleText size="cardMedium" fontWeight={500}>Activity Feed</TitleText>}
            icon={<HeaderIcon />}
            action={<ActionHeader />}
        >
            <AppTimeline>
                <AppTimelineItem buttonText='document.pdf'
                    timeSlot='2 hrs'
                    icon={<VideoFileIcon style={customDotIcon} />}
                    button={
                        <Button border='dashed' color='white'
                            icon={<DescriptionIcon style={customButtonIcon} />}
                        >document.pdf</Button>
                    }>Document uploaded on Tuesday
                </AppTimelineItem>

                <AppTimelineItem buttonText='document.pdf'
                    timeSlot='Yesterday 13:00'
                    icon={<VideoFileIcon style={customDotIcon} />}
                    button={
                        <Button border='dashed' color='white'
                            icon={<DescriptionIcon style={customButtonIcon} />}
                        >document.pdf</Button>
                    }>You added file description to you timeline
                </AppTimelineItem>

                <AppTimelineItem buttonText='document.pdf'
                    timeSlot='2 days ago'
                    icon={<VideoFileIcon style={customDotIcon} />}
                    button={
                        <Button border='dashed' color='white'
                            icon={<DescriptionIcon style={customButtonIcon} />}
                        >document.pdf</Button>
                    }>Document uploaded on Tuesday
                </AppTimelineItem>

                <AppTimelineItem buttonText='document.pdf'
                    timeSlot='2 days ago'
                    icon={<VideoFileIcon style={customDotIcon} />}
                    button={
                        <Button border='dashed' color='white'
                            icon={<DescriptionIcon style={customButtonIcon} />}
                        >document.pdf</Button>
                    }>Stared new lectures
                </AppTimelineItem>

            </AppTimeline>
        </BaseCard>
    );
}

export default ActivityFeed


