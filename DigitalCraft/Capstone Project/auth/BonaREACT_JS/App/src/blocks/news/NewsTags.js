import React from 'react';

const NewsTags = () => {
    return (
        <div className="tags">
            <p>
                <a title="Medicine" href={ process.env.PUBLIC_URL + "/news" }>Medicine</a>
                <a title="Doctors" href={ process.env.PUBLIC_URL + "/news" }>Doctors</a>
                <a title="Health" href={ process.env.PUBLIC_URL + "/news" }>Health</a>
            </p>
        </div>
    );
};

export default NewsTags;
