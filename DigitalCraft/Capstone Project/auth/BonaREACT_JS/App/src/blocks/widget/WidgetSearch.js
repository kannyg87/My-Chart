import React from 'react';

const WidgetSearch = () => {
    return (
        <div className="widget widget_search">
            <form className="search-form" role="search" method="get" action="search-results.html">
                <div className="search input-group">
                    <input className="form-control form-control-lg" type="text" placeholder="Type here to search" name="s" />

                    <div className="input-group-append">
                        <button type="submit" className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WidgetSearch;
