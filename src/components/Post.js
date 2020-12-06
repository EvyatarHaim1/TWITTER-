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
                       src="https://scontent.ftlv15-1.fna.fbcdn.net/v/t1.0-9/117166831_10157709216476947_6742071503243751974_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=K37hjfWlSZoAX8ZcZ5J&_nc_ht=scontent.ftlv15-1.fna&oh=aa045b8059fb258d8ee9461d449d7496&oe=5FF46300"/>
            </div>
            <div className="post_body">
                 <div className="post_header">
                       <div className="post_headerText" >
                            <h3>
                                Evyatar Haim 
                                <span className="postHeader_special">
                                    <VerifiedUserIcon className="post_badge"/>
                                </span>
                            </h3>
                       </div>
                       <div className="post_headerDescription">
                           <p>I challenge you to get a Junior developer's position until March</p>
                       </div>
                 </div>
                 <img src="https://lh3.googleusercontent.com/proxy/uipWgr4C5q5R3ZC9H5C0EDBx7d2oSk6oHYLoT4jYLvxafCI_1gx_ACsXnUJ4_NTgUTR2gsj_mC1yiSikjI_dEVWsxviFDOy8nX0YiwbwdbRYQzqfuoOTagbniLssPQ" 
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
