import React from 'react';

import RecentEntriesData from '../../data/news/newsRecentEntriesData.json';

const WidgetRecentEntries = () => {
    return (
        <div className="widget widget_recent_entries">
            <h6 className="widget-title">Recent posts</h6>

            <ul className="list-unstyled items">
                { RecentEntriesData && RecentEntriesData.map( ( entry, key ) => {
                    return (
                        <li key={ key } className="item">
                            <div className="row gutter-width-xs">
                                <div className="col-3">
                                    <a href={ process.env.PUBLIC_URL + entry.imgLink }> 
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <img src={ entry.imgSrc } alt={ entry.imgAlt } />
                                            </div>
                                        </div>
                                    </a>
                                </div>
        
                                <div className="col-9 align-self-center">
                                    <p className="item-t-head">
                                        <a title={ entry.headTitle } href={ process.env.PUBLIC_URL + entry.headLink }>{ entry.headTitle }</a>
                                    </p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default WidgetRecentEntries;
