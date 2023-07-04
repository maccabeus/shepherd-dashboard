import React, { useState, useEffect, ReactElement, FC } from 'react';
import { WeatherLogo } from './icon/Weather';
import { useWelcomeWidgetStyles } from './styles/WelcomeWidgetStyle';
import TitleText from '../text/TitleText';
import BodyText from '../text/BodyText';



export const WelcomeWidget: FC<any> = (props): ReactElement => {
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const styles = useWelcomeWidgetStyles();

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const formattedDate = date.toLocaleDateString([]);
            setCurrentTime(time);
            setCurrentDate(formattedDate);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <TitleText size="medium">Hi Liam, welcome back!</TitleText>
            </div>
            <div className={styles.info}>
                <div className={styles.icon}><WeatherLogo /></div>
                <div className={styles.dot}></div>
                <div className={styles.infoItem}>
                    <BodyText size='bodySmall' >Tuesday, July 21 </BodyText> 
                </div>
                <div className={styles.dot}></div>
                <div className={styles.infoItem}> <BodyText  size='bodySmall'>{currentTime}</BodyText></div>
            </div>
        </div>
    );
};

export default WelcomeWidget;