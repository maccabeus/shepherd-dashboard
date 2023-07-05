import { makeStyles } from "@material-ui/core"
import Logo from "../../../assets/images/cloud.png"
import { CARD_IMAGE_TINY } from "../../../configs/StyleConstants";

const useStyles = makeStyles((theme) => ({
    icon: {
        width:CARD_IMAGE_TINY+10,
        height:CARD_IMAGE_TINY,
    }
}));

export const WeatherLogo = () => {
    const styles = useStyles();
    return (
        <img className={styles.icon} src={Logo} alt="cloud logo" />
    )
}
