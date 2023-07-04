import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { BASE_APP_COLOR, BASE_APP_COLOR_WHITE, PADDING_SIDE, PADDING_TOP, SIDEBAR_WIDTH } from "../../../configs/StyleConstants";


const drawerWidth = 240;

export const useLayoutStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));