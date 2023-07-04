import React, { FC, ReactElement } from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CARD_BORDER_RADIUS, CARD_PADDING, COLOR_LIGHT_GREY, BASE_APP_COLOR, CARD_MARGIN, CARD_MAX_WIDTH, CARD_SHADOW } from '../../configs/StyleConstants';
import TitleText from '../text/TitleText';
import BaseCard from '../card/BaseCard';

export interface BarChartItem {
    name: string
    value: number
}
export type BarChartData = Array<BarChartItem>

export interface BarChartProps {
    data: BarChartData
}

const useStyles = makeStyles((theme) => ({
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    chartContainer: {
        width: '100%',
        height: 250,
    },
}));


const ResponsiveBarChart: FC<BarChartProps> = (props): ReactElement => {
    const classes = useStyles();
    const { data } = props
    return (
        <BaseCard >
            <TitleText size='medium'>Quiz Performance</TitleText>
            <CardContent className={classes.cardContent}>
                <div className={classes.chartContainer}>
                    <ResponsiveContainer>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis tickFormatter={(value) => `${value}%`} />
                            <Tooltip />
                            <Bar dataKey="value" fill={`${BASE_APP_COLOR}`} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </BaseCard>
    );
}
export default ResponsiveBarChart;
