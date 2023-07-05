import React, { useState, useEffect, ReactElement, FC } from 'react';
import { WeatherLogo } from './icon/Weather';
import TitleText from '../text/TitleText';
import BodyText from '../text/BodyText';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { PADDING_TINY } from '../../configs/StyleConstants';


const useWelcomeWidgetStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: " flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            padding: PADDING_TINY,
            width: "auto",
            marginLeft: 0,
        },
        text: {
            display: "flex",
            marginBottom: PADDING_TINY,
        },
        info: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
        },
        dot: {
            borderRadius: "100%",
            width: 5,
            height: 5,
            backgroundColor: "gray",
            marginLeft: 5,
            marginRight: 5
        },
        icon: {
            paddingRight: 5

        },
        infoItem: {
            paddingRight: 5
        }
    })
)


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
                    <BodyText size='small' fontWeight={420} >Tuesday, July 21 </BodyText>
                </div>
                <div className={styles.dot}></div>
                <div className={styles.infoItem}> <BodyText fontWeight={420} size='small'>{currentTime}</BodyText></div>
            </div>
        </div>
    );
};

export default WelcomeWidget;