import React, { useState } from 'react';
import styled from 'styled-components';
import { Avatar, Button } from '@material-ui/core';
import db from '../firebase';

function TweetBox() {

    const [ tweetMessage, setTweetMessage ] = useState('');
    const [ tweetImage, setTweetImage ] = useState('');
 
    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName:"Roi boku",
            username:"roi@boku1",
            verified:true,
            timestamp: new Date(),
            text: tweetMessage,
            image: tweetImage,
            avatar:"data:image/jpeg;base64,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",
        })

        setTweetImage('');
        setTweetMessage('');
    }

    return (
        <Div>
            <form>
                <div className="tweetboxInput">   
                    <Avatar src="https://scontent.ftlv15-1.fna.fbcdn.net/v/t1.0-9/117166831_10157709216476947_6742071503243751974_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=K37hjfWlSZoAX8ZcZ5J&_nc_ht=scontent.ftlv15-1.fna&oh=aa045b8059fb258d8ee9461d449d7496&oe=5FF46300"
                    />
                    <input value={tweetMessage}
                           onChange={ e => setTweetMessage(e.target.value)}
                           placeholder="What's happening?" 
                           type="text"
                    />
                </div>
                    <input value={tweetImage}
                           onChange={ e => setTweetImage(e.target.value)}
                           placeholder="Optional: Enter image URL" 
                           type="text"
                           className="tweetbox_ImageInput" />
                <Button type="submit"
                        onClick={sendTweet}
                        variant="outlined" 
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
