import React from 'react';
import styled from 'styled-components';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <Div>
            <form>
                <div className="tweetboxInput">   
                    <Avatar src="https://scontent.ftlv15-1.fna.fbcdn.net/v/t1.0-9/117166831_10157709216476947_6742071503243751974_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=K37hjfWlSZoAX8ZcZ5J&_nc_ht=scontent.ftlv15-1.fna&oh=aa045b8059fb258d8ee9461d449d7496&oe=5FF46300"
                    />
                    <input 
                           placeholder="What's happening?" 
                           type="text"
                    />
                </div>
                    <input 
                           placeholder="Optional: Enter image URL" 
                           type="text"
                           className="tweetbox_ImageInput" />
                <Button variant="outlined" 
                        className="tweetBoxBTN">
                            Tweet
                </Button>
            </form>
        </Div>
    )
}

export default TweetBox;

const Div = styled.div`
padding-bottom: 10px;
border-bottom: 8px solid var(--twitter-background);
padding-right: 10px;

form{
    display: flex;
    flex-direction: column;
}

.tweetboxInput{
    padding: 20px;
    display: flex;
}

.tweetboxInput > input{
   flex: 1;
   margin-left: 20px;
   font-size: 20px;
   border: none;
}

.tweetBoxBTN{
    background-color: var(--twitter-color) !important;
    border: none !important;
    color: white;
    font-weight: 900 !important;
    text-transform: inherit !important;
    border-radius: 30px !important;
    width: 80px;
    height: 40px !important;
    margin-top: 20px !important;
    margin-left: auto !important;
}

.tweetbox_ImageInput{
    border: none;
    padding: 10px;
}
`
