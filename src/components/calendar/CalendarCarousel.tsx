import { FC, useState, useRef, useEffect } from 'react';
import {
    Select,
    MenuItem,
    makeStyles,
    IconButton,
    CircularProgress
} from '@material-ui/core';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BASE_APP_COLOR, COLOR_GREY, COLOR_LIGHT_GREY, FONT_BODY, FONT_TINY, FONT_X_TINY } from '../../configs/StyleConstants';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    carouselWrapper: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '100%',
        marginRight: "auto"
    },

    carouselContainer: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '100%',
        overflowX: 'auto',
    },
    carousel: {
        display: 'flex',
        alignItems: 'center',
    },
    dateItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        margin: 2,
        position: 'relative',
        cursor: 'pointer',
        width: 50,
        height: 50,
        borderRadius: '100%',
        padding: 27,
        color: COLOR_GREY,
        fontSize: 20,
        fontWeight: 450

    },
    dayLabel: {
        color: COLOR_GREY,
        textTransform: "uppercase",
        fontSize: FONT_X_TINY,
        marginTop: -4
    },
    selectedDate: {
        backgroundColor: COLOR_LIGHT_GREY,
        color: BASE_APP_COLOR,
    },
    arrowButton: {
        position: 'relative',
        '&:active': {
            transform: 'scale(0.9)',
        },
    },
    loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    monthSelector: {
        display: "flex",
        marginRight: "auto",
    },
    select: {
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        color: COLOR_GREY,
        fontSize: FONT_TINY,
        height: 20
    },
}));

export const TimeViewCarousel: FC = () => {

    const classes = useStyles();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState<number>(
        currentDate.getMonth()
    );
    const [loading, setLoading] = useState(false);
    const selectedDateRef = useRef<HTMLDivElement | null>(null);

    const datesToShow = generateDatesToShow(currentDate);

    const handlePrevDate = () => {
        setLoading(true);
        setTimeout(() => {
            const prevDate = new Date(currentDate);
            prevDate.setDate(prevDate.getDate() - 1);
            setCurrentDate(prevDate);
            setLoading(false);
        }, 500);
    };

    const handleNextDate = () => {
        setLoading(true);
        setTimeout(() => {
            const nextDate = new Date(currentDate);
            nextDate.setDate(nextDate.getDate() + 1);
            setCurrentDate(nextDate);
            setLoading(false);
        }, 500);
    };

    const handleMonthChange = (
        event: React.ChangeEvent<{ value: unknown }>
    ) => {
        const selectedMonth = event.target.value as number;
        setCurrentMonth(selectedMonth);

        const newDate = new Date(currentDate);
        newDate.setMonth(selectedMonth);
        setCurrentDate(newDate);
    };

    const handleDateClick = (date: Date) => {
        setCurrentDate(date);
    };

    useEffect(() => {
        if (selectedDateRef.current) {
            selectedDateRef.current.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
            });
        }
    }, [currentDate]);

    const customArrowStyle: any = { fontSize: FONT_BODY };
    const NoCaret = () => <></>

    return (
        <div className={classes.root}>
            <div className={classes.monthSelector}>
                <Select
                    value={currentMonth}
                    onChange={handleMonthChange}
                    variant="outlined"
                    className={classes.select}
                    IconComponent={NoCaret}
                >
                    <MenuItem value={0}>January</MenuItem>
                    <MenuItem value={1}>February</MenuItem>
                    <MenuItem value={2}>March</MenuItem>
                    <MenuItem value={3}>April</MenuItem>
                    <MenuItem value={4}>May</MenuItem>
                    <MenuItem value={5}>June</MenuItem>
                    <MenuItem value={6}>July</MenuItem>
                    <MenuItem value={7}>August</MenuItem>
                    <MenuItem value={8}>September</MenuItem>
                    <MenuItem value={9}>October</MenuItem>
                    <MenuItem value={10}>November</MenuItem>
                    <MenuItem value={11}>December</MenuItem>
                </Select>
            </div>
            <div className={classes.carouselWrapper}>
                <IconButton
                    className={classes.arrowButton}
                    onClick={handlePrevDate}
                    disabled={loading}
                >
                    <ArrowBackIosIcon style={customArrowStyle} />
                </IconButton>
                <div className={classes.carouselContainer}>

                    <div className={classes.carousel}>
                        {datesToShow.map((date) => (
                            <div
                                ref={
                                    date.toDateString() === currentDate.toDateString()
                                        ? selectedDateRef
                                        : null
                                }
                                key={date.toDateString()}
                                className={`${classes.dateItem} ${date.toDateString() === currentDate.toDateString()
                                    ? classes.selectedDate
                                    : ''
                                    }`}
                                onClick={() => handleDateClick(date)}
                            >
                                <div>{date.getDate()}</div>
                                <div className={classes.dayLabel}>
                                    {getDayLabel(date)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <IconButton
                    className={classes.arrowButton}
                    onClick={handleNextDate}
                    disabled={loading}
                >
                    <ArrowForwardIosIcon style={customArrowStyle} />
                </IconButton>
            </div>
            {loading && (
                <CircularProgress size={30} className={classes.loader} />
            )}
        </div>
    );
};

// Helper function to generate an array of dates to show in the carousel
const generateDatesToShow = (currentDate: Date): Date[] => {
    const numVisibleDates = 10; // Number of dates to show in the carousel

    // Calculate the start and end dates to display
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - Math.floor(numVisibleDates / 2));

    const dates: Date[] = [];
    for (let i = 0; i < numVisibleDates; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        dates.push(date);
    }

    return dates;
};

// Helper function to get the day label for a given date
const getDayLabel = (date: Date): string => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
};

export default TimeViewCarousel;