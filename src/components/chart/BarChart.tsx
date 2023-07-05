import React, { FC, ReactElement } from 'react';
import { CardContent, makeStyles } from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BASE_APP_COLOR } from '../../configs/StyleConstants';
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
        flexDirection: "column",
        flex: 1,
        alignItems: 'start',
        justifyContent: "center",
    },
    chartContainer: {
        display: "flex",
        marginRight: "auto",
        marginLeft: -40,
        width: '100%',
        height: 250,
    },
}));


const ResponsiveBarChart: FC<BarChartProps> = (props): ReactElement => {
    const classes = useStyles();
    const { data } = props
    return (
        <BaseCard
            padding={{ top: 0 }}
            showHeader
            title={<TitleText size="card">Quiz Performance</TitleText>}
        >
            <CardContent className={classes.cardContent}>
                <div className={classes.chartContainer}>
                    <ResponsiveContainer>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis tickFormatter={(value) => `${value}%`} />
                            <Tooltip />
                            <Bar dataKey="value" fill={`${BASE_APP_COLOR}`} barSize={15} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </BaseCard>
    );
}
export default ResponsiveBarChart;
