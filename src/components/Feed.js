import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../firebase';
import FlipMove from 'react-flip-move';

function Feed() {

    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
     
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))

    },[]);

    return (
        <Div>
            <div className="feed_header">
                <h2>Home</h2>
            </div>

            <TweetBox />
            
            <FlipMove>
            {posts.map( post => (
            <Post 
                  key={post.text}
                  displayName={post.displayName}
                  username={post.username}
                  verified={post.verified}
                  timestamp={post.timestamp}
                  text={post.text}
                  image={post.image}
                  avatar={post.avatar}
            />
            ))}
            </FlipMove>
        </Div>
    )
}

export default Feed;

const Div = styled.div`
flex: 0.4;
border-right: 1px solid var(--twitter-background);
/* min-width: fit-content; */
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
