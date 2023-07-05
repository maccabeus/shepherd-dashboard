
import { FC, ReactElement } from "react";
import { Menu, MenuItem, SubMenu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { FaHome, FaComments, FaBook, FaQuestionCircle, FaChartLine, FaClipboardList, FaStickyNote, FaTasks } from 'react-icons/fa';
import { Link } from "react-router-dom";
import {  PADDING_TOP } from "../configs/StyleConstants";


export const SideMenu: FC<any> = (): ReactElement => {
    return (
        <Sidebar
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    paddingTop: PADDING_TOP,
                    borderRight:"0px",
                    // backgroundColor: BASE_APP_COLOR_WHITE,
                    borderStyle:"none"
                },
            }}
        >
            <Menu
                menuItemStyles={{
                    button: {
                        // the active class will be added automatically by react router
                        // so we can use it to style the active menu item
                        [`&.active`]: {
                            backgroundColor: '#13395e',
                            color: '#b6c8d9',
                        },
                    },
                }}
            >
                <MenuItem component={<Link to="/#" />} icon={<FaHome />}>Home</MenuItem>
                <SubMenu label="Find a Tutor" icon={<FaQuestionCircle />}>
                    <MenuItem component={<Link to="/#" />}>Online</MenuItem>
                    <MenuItem component={<Link to="/#" />}>Offline</MenuItem>
                </SubMenu>
                <MenuItem component={<Link to="/test" />} icon={<FaComments />}>Messages</MenuItem>
                <MenuItem component={<Link to="/#" />} icon={<FaBook />}>Library</MenuItem>
                <MenuItem component={<Link to="/#" />} icon={<FaQuestionCircle />}>Ask Shepherd</MenuItem>
                <MenuItem component={<Link to="/#" />} icon={<FaChartLine />}>Performance</MenuItem>
                <MenuItem component={<Link to="/#" />} icon={<FaClipboardList />}>Study Plans</MenuItem>
                <MenuItem component={<Link to="/#" />} icon={<FaStickyNote />}>Notes</MenuItem>
                <MenuItem component={<Link to="/#" />} icon={<FaTasks />}>Flashcards</MenuItem>
                <SubMenu label="Pinned Notes" icon={<FaBook />}>
                    <MenuItem component={<Link to="/#" />}>Note One</MenuItem>
                    <MenuItem component={<Link to="/#" />}>Note Two</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}