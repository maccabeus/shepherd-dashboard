import { FC, ReactElement } from "react";
import { Menu, MenuItem, SubMenu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { FaHome, FaComments, FaBook, FaQuestionCircle, FaChartLine, FaClipboardList, FaStickyNote, FaTasks } from 'react-icons/fa';
import { makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import { BASE_APP_COLOR, COLOR_GREY, COLOR_LIGHT_GREY, COLOR_WHITE, FONT_SMALL, PADDING_SIDE, PADDING_SMALL } from "../configs/StyleConstants";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    menuItem: {
        color: COLOR_GREY,
        fontSize: FONT_SMALL,
        "& .active": {
            color: BASE_APP_COLOR,
        },
        "& :hover": {
            color: BASE_APP_COLOR,
        }
    },
    menuBody: {
        padding: PADDING_SMALL,
    },
    divider: {
        borderBottom: `1px solid ${COLOR_LIGHT_GREY}`,
        maxWidth: 200,
    },
}));

export const SideMenu: FC<any> = (): ReactElement => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Sidebar
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    paddingTop: PADDING_SIDE,
                    backgroundColor: COLOR_WHITE,
                    borderStyle: "none",
                }
            }}
            collapsed={isMobile} // Automatically collapse menu on mobile view
        >
            <Menu className={isMobile ? classes.menuBody : ""}>
                <MenuItem component={<Link to="/#" />} icon={<FaHome />} className={classes.menuItem}>
                    Home
                </MenuItem>
                {isMobile && (
                    <MenuItem component={<Link to="/test" />} icon={<FaComments />} className={classes.menuItem}>
                        Messages
                    </MenuItem>
                )}
                <MenuItem component={<Link to="/#" />} icon={<FaBook />} className={classes.menuItem}>
                    Library
                </MenuItem>
                <Divider className={classes.divider} />
                <MenuItem component={<Link to="/#" />} icon={<FaQuestionCircle />} className={classes.menuItem}>
                    Ask Shepherd
                </MenuItem>
                <MenuItem component={<Link to="/#" />} icon={<FaChartLine />} className={classes.menuItem}>
                    Performance
                </MenuItem>
                <MenuItem component={<Link to="/#" />} icon={<FaClipboardList />} className={classes.menuItem}>
                    Study Plans
                </MenuItem>
                <MenuItem component={<Link to="/#" />} icon={<FaStickyNote />} className={classes.menuItem}>
                    Notes
                </MenuItem>
                <MenuItem component={<Link to="/#" />} icon={<FaTasks />} className={classes.menuItem}>
                    Flashcards
                </MenuItem>
                <Divider className={classes.divider} />
                <SubMenu label="Pinned Notes" icon={<FaBook />} className={classes.menuItem}>
                    <MenuItem component={<Link to="/#" />} className={classes.menuItem}>Note One</MenuItem>
                    <MenuItem component={<Link to="/#" />} className={classes.menuItem}>Note Two</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    );
};
