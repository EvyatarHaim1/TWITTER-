import React from 'react';
import styled from 'styled-components';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
    return (
        <Div>
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Post 
                  displayName 
                  username
                  verified 
                  timestamp 
                  text 
                  image 
                  avatar
            />
        </Div>
    )
}

export default Feed;

const Div = styled.div`
flex: 0.4;
border-right: 1px solid var(--twitter-background);
min-width: fit-content;
overflow-y:scroll;

::-webkit-scrollbar{
    display: none;
}

-ms-overflow-style: none;
scrollbar-width: none;

.feed_header {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
    border: 1px solid var(--twitter-background);
    padding: 15px 20px;
}

.feed_header > h2 {
    font-size: 20px;
    font-weight: 800;
}


`
