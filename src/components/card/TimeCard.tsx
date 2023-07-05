import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { COLOR_LIGHT_GREY, COLOR_WHITE, PADDING_SMALL } from '../../configs/StyleConstants';
import MidIcon from "../../assets/images/mid.png"
import CircularProgressbar from '../chart/CircularProgress';
import BodyText from '../text/BodyText';


const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    maxWidth: 100,
    width: "auto",
    maxHeight: 100,
    backgroundColor: COLOR_LIGHT_GREY,
    padding: 8
  },

  cardInner: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: COLOR_WHITE,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  cardInnerContent: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  icon: {
    display: "flex",
    position: "absolute",
    width: 35,
    height: 35
  },
  text: {
    display: "flex",
    maxWidth: "100%",
    marginTop: PADDING_SMALL
  }
});

export interface TimeCardProps {
  value: number;
  text?: string
}

const CustomProgress: FC<TimeCardProps> = ({ value, text }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <div className={classes.cardInner}>
          <div className={classes.cardInnerContent}>
            <img className={classes.icon} src={MidIcon} alt="icon" />
            <CircularProgressbar progress={value} />
          </div>
        </div>
      </div>
      {text && <div className={classes.text}>
        <BodyText size="body">You have studied 10/1hr today</BodyText>
      </div>
      }
    </div>


  );
};

export default CustomProgress;
