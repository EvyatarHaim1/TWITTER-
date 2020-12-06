import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {

    const [ post, setPost ] = useState([]);

    useEffect(()=>{
    
    },[])

    return (
        <Div>
            <div className="feed_header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <Post 
                  displayName="Evyatar Haim"
                  username="evyatarHaim"
                  verified={true}
                  timestamp 
                  text="I challenge you to get a Junior developer's position until March"
                  image="https://lh3.googleusercontent.com/proxy/uipWgr4C5q5R3ZC9H5C0EDBx7d2oSk6oHYLoT4jYLvxafCI_1gx_ACsXnUJ4_NTgUTR2gsj_mC1yiSikjI_dEVWsxviFDOy8nX0YiwbwdbRYQzqfuoOTagbniLssPQ" 
                  avatar="https://scontent.ftlv15-1.fna.fbcdn.net/v/t1.0-9/117166831_10157709216476947_6742071503243751974_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=K37hjfWlSZoAX8ZcZ5J&_nc_ht=scontent.ftlv15-1.fna&oh=aa045b8059fb258d8ee9461d449d7496&oe=5FF46300"
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
