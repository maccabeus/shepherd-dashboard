import React, { FC, ReactChild, ReactChildren, ReactElement, ReactNode, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

const AutoPlaySwipeableViews = bindKeyboard(autoPlay(virtualize(SwipeableViews)));

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        maxWidth: "100%",
        maxHeigh: "100%",
        height: "auto",
        width: "auto",
        flexGrow: 1,
        margin: 'auto',
    },
    slide: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 1,
        minHeight: 100
    },
}));

export type CarouselItems = Array<ReactChild | ReactElement | ReactChildren | string>;
export interface CarouselProps {
    items: CarouselItems
}

const Carousel: FC<CarouselProps> = (props): ReactElement => {

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    const { items } = props;

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    const slideRenderer = ({ index, key }: any) => {
        const item = items[mod(index, items.length)];
        return (
            <div key={key} className={classes.slide} >
                {item}
            </div>
        );
    };

    return (
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                slideRenderer={slideRenderer}
                slideCount={Infinity}
                interval={5000}
                resistance
            />
            {/* <MobileStepper
        variant="dots"
        steps={carouselItems.length}
        position="static"
        activeStep={activeStep}
        nextButton={<></>}
        backButton={<></>}
      /> */}
        </div>
    );
};

export default Carousel;
