import React from 'react';
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SidebarOption from './SidebarOption';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <Div>
            <TwitterIcon className="sidebar_twitterIcon" />
            <SidebarOption text="Home" Icon={HomeIcon} active />
            <SidebarOption text="Expolore" Icon={SearchIcon}/>
            <SidebarOption text="Notifications" Icon={NotificationsNoneIcon}/>
            <SidebarOption text="Messages" Icon={MailOutlineIcon}/>
            <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon}/>
            <SidebarOption text="Lists" Icon={ListAltIcon}/>
            <SidebarOption text="Profile" Icon={PermIdentityIcon}/>
            <SidebarOption text="More" Icon={MoreHorizIcon}/>
            
            <Button 
                   variant="outlined" 
                   className="tweetBTN"
                   fullWidth
            > Tweet
            </Button>


        </Div>
    )
}

export default Sidebar;

const Div = styled.div`
border-right: 1px solid var(--twitter-background);
flex: 0.3;
min-width: 250px;
margin-top: 20px;
padding-left: 20px;
padding-right: 20px;

.sidebar_twitterIcon{
    color: var(--twitter-color);
    font-size: 30px !important;
    margin-left: 20px;
    margin-bottom: 20px;
}

.tweetBTN{
    background-color: var(--twitter-color) !important;
    border: none !important;
    color: white;
    font-weight: 900 !important;
    text-transform: inherit !important;
    border-radius: 30px !important;
    height: 50px !important;
    margin-top: 20px !important;
}
`