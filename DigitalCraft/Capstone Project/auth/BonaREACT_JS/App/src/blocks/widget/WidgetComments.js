import React from 'react';

const WidgetComments = () => {
    return (
        <div className="widget widget_recent_comments">
            <h6 className="widget-title">Recent Comments</h6>

            <ul id="recentcomments">
                <li className="recentcomments">
                    <span className="comment-author-link">Tommy Andersen</span> on
                    <a title="Tommy Andersen" href={ process.env.PUBLIC_URL + "/news-single-post#comments" }>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</a>
                </li>

                <li className="recentcomments">
                    <span className="comment-author-link">Rosie Ford</span> on
                    <a title="Rosie Ford" href={ process.env.PUBLIC_URL + "/news-single-post#comments" }>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</a>
                </li>

                <li className="recentcomments">
                    <span className="comment-author-link">Arthur Hopin</span> on
                    <a title="Arthur Hopin" href={ process.env.PUBLIC_URL + "/news-single-post#comments" }>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</a>
                </li>
            </ul>
        </div>
    );
};

export default WidgetComments;
