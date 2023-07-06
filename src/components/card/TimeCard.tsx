import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { COLOR_LIGHT_GREY, COLOR_WHITE, PADDING_SMALL } from '../../configs/StyleConstants';
import MidIcon from "../../assets/images/mid.png"
import Zap from "../../assets/images/zap.png"
import Fire from "../../assets/images/fire.png"
import CircularProgressbar from '../chart/CircularProgress';
import BodyText from '../text/BodyText';
import TitleText from '../text/TitleText';


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
  type: "mid" | "zap" | "fire"
  value?: number;
  text?: string
  title?: string
}

const CustomProgress: FC<TimeCardProps> = ({ value, text, type, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <div className={classes.cardInner}>
          <div className={classes.cardInnerContent}>
            {type === "mid" && (
              <>
                <img className={classes.icon} src={MidIcon} alt="icon" />
                <CircularProgressbar progress={value ?? 0} />
              </>
            )}
            {type === "zap" && (
              <>
                <img className={classes.icon} src={Zap} alt="icon" />
                <CircularProgressbar progress={value ?? 0} />
              </>
            )}
            {type === "fire" && (
              <>
                <img className={classes.icon} src={Fire} alt="icon" />
                <CircularProgressbar progress={value ?? 0} />
              </>
            )}
          </div>
        </div>
      </div>
      {title && <div className={classes.text}>
        <TitleText size="small">{text}</TitleText>
      </div>
      }
      {text && <div className={classes.text}>
        <BodyText size="body">{text}</BodyText>
      </div>
      }
    </div>


  );
};

export default CustomProgress;
