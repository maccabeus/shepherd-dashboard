import React from 'react';
import { CircularProgressbar as ProgressBar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BASE_APP_COLOR, COLOR_WHITE } from '../../configs/StyleConstants';

interface CircularProgressbarProps {
    progress: number;
}
const CircularProgressbar: React.FC<CircularProgressbarProps> = ({ progress }) => {
    return (
        <ProgressBar
            value={progress}
            background={false}
            backgroundPadding={10}
            styles={buildStyles({
                strokeLinecap: 'round',
                pathColor: BASE_APP_COLOR,
                trailColor: COLOR_WHITE,
                backgroundColor: COLOR_WHITE,
            })}
        />
    );
};

export default CircularProgressbar;
