import React from 'react';

import CommentContent from './NewsCommentContent';
import CommentForm from '../../components/form/CommentForm';

const NewsComments = () => {
    return (
        <div id="comments" className="comments-area spacer m-top-xl">
        <div className="comment-title">
            <h3>Comments (1)</h3>
        </div>

        <ul className="comment-list list-unstyled style-default">
            <li className="comment">
                <div className="comment-wrapper">
                    <div className="comment-details">
                        <CommentContent />
                    </div>
                </div>
            </li>
        </ul>

        <div className="block spacer m-top-xl">
            <div id="respond" className="comment-respond">
                <h3 id="reply-title" className="comment-reply-title">Leave a reply <a rel="nofollow" id="cancel-comment-reply-link" className="btn btn-link border-0 p-0 min-w-auto link-no-space" href="blog-single-post.html" style={{ display: "none" }}>Cancel reply</a></h3>

                <CommentForm />
            </div>
        </div>
    </div>
    );
};

export default NewsComments;
