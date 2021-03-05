import React from 'react';

import CommentsReply from '../../components/button/CommentsReply';

const NewsCommentContent = () => {
    return (
        <div className="comment-content">
            <div className="comment-content-left">
                <div className="comment-img">
                    <img src="assets/img/placeholder/97x97.jpg" alt="Tom Henders" />
                </div>
            </div>

            <div className="comment-content-right">
                <h6 className="comment-author after">
                    <a title="Tommy Andersen" href={ process.env.PUBLIC_URL + "/news-single-post" }>Tommy Andersen</a>
                </h6>

                <div className="comment-time">
                    <p>29 February, { new Date().getFullYear() } 3:23 pm</p>
                </div>

                <div className="comment-description">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                </div>

                <div className="comment-reply no-space">
                    <CommentsReply />
                </div>
            </div>
        </div>
    );
};

export default NewsCommentContent;