import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({ displayName, username, verified, timestamp, text, image, avatar }) {
    return (
        <Div>
            <div className="post_avatar"> 
               <Avatar 
                       src={avatar}/>
            </div>
            <div className="post_body">
                 <div className="post_header">
                       <div className="post_headerText" >
                            <h3>
                                {displayName}
                                <span className="postHeader_special">
                                   {verified && <VerifiedUserIcon className="post_badge" />}
                                    {username}
                                </span>
                            </h3>
                       </div>
                       <div className="post_headerDescription">
                           <p>{text}</p>
                       </div>
                 </div>
                 <img src={image}
                      alt="post image" 
                />
                <div className="postFooter">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </Div>
    )
}

export default Post;

const Div = styled.div`
display: flex;
align-items: flex-start;
border-bottom: 1px solid var(--twitter-background);
padding-bottom: 10px;

.post_body > img{
    border-radius: 20px;
}

.postFooter{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.post_badge{
    font-size: 14px !important;
    color: var(--twitter-color)
}

.postHeader_special{
    font-weight: 600;
    font-size: 12px;
    color: gray;
}

.post_headerText > h3{
   font-size: 15px;
   margin-bottom: 5px;
}
.post_headerDescription{
    margin-bottom: 10px;
    font-size: 15px;
}

.post_body{
    flex: 1;
    padding: 10px;
}

.post_avatar{
    padding: 20px ;
  
}
`
