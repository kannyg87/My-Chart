import React from 'react';
import { Link } from 'react-scroll/modules';

const CommentsReply = () => {
    return (
        <div className="comment-reply no-space">
            <Link
                title="Reply"
                className="comment-reply-link btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space scroll-to-id"
                to="reply-title"
                spy={ true }
                smooth={ true }
                duration={ 0 }
            >
                Reply
            </Link>
        </div>
    );
};

export default CommentsReply;