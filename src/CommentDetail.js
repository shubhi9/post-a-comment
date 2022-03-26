import React from "react";
//import faker from '@faker-js/faker';

const CommentDetail = (props) => {
    //console.log(props);
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt='avatar' src={props.avatar} />
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    {props.author}
                </a>
                <div className='matadata'>
                    <span className='date'>{props.timeAgo}</span>
                </div>
                <div className='text'>{props.cmt}</div>
            </div>
        </div>
    );
};


export default CommentDetail;