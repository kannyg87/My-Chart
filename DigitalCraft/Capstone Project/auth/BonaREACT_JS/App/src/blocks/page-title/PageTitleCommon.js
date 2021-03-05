import React from 'react';

const PageTitleCommon = ( props ) => {
    return (
        <div id="page-title">
            <div className="wrapper text-center">
                <h1 className="large">{ props.title }</h1>
            </div>
        </div>
    );
};

export default PageTitleCommon;