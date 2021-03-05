import React from 'react';

const NewsMeta = () => {
    return (
        <div className="meta">
            <p>
                <span><a href={ process.env.PUBLIC_URL + "/news" }>By Linkdmin</a></span>
                <span>Comments (1)</span>
                <span className="category"><a title="Health care" href={ process.env.PUBLIC_URL + "/news" }>Health care</a></span>
            </p>
        </div>
    );
};

export default NewsMeta;
