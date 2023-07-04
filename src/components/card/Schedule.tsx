import React, { FC, ReactChild, ReactChildren, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core';
import BaseCard from './BaseCard';

const useStyles = makeStyles((theme) => ({
}));

export interface CardProps {
    children?: Array<ReactChild> | ReactElement | ReactChildren | string
}
const ActivityFeed: FC<CardProps> = (props): ReactElement => {
    // const classes = useStyles();
    return (
        <BaseCard>
            <div>feed</div>
        </BaseCard>
    );
}

export default ActivityFeed
