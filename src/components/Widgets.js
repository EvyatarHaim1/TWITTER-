import React from 'react'
import styled from 'styled-components'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <Div>
            <div className="widgets_input">
                <SearchIcon className="widget_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets_widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="evyatarHaim"
                options={{ height: 400 }}
                />

                <TwitterShareButton
                url={"https://www.facebook.com/Evios"}
                options={{ text: "#reactjs is awesome", via: "evyatarHaim" }}
                />
            </div>
        </Div>
    )
}

export default Widgets

const Div = styled.div`
flex: 0.3;

.widgets_input{
    display: flex;
    align-items: center;
    background-color: var(--twitter-background);
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
    margin-left: 20px;
}

.widgets_input > input {
    border: none;
    background-color: var(--twitter-background);
}

.widget_searchIcon{ color: gray;}

.widgets_widgetContainer{
    margin-top: 15px;
    margin-left: 20px;
    padding: 20px;
    background-color: #f5f8fa;
    border-radius: 20px;
}
`

