import React from 'react';

const WidgetCategories = () => {
    return (
        <div className="widget widget_categories">
            <h6 className="widget-title">Categories</h6>

            <ul>
                <li className="cat-item">
                    <a title="Services" href={ process.env.PUBLIC_URL + "/news" }>Services</a>
                </li>

                <li className="cat-item">
                    <a title="Drugs" href={ process.env.PUBLIC_URL + "/news" }>Drugs</a>
                </li>

                <li className="cat-item">
                    <a title="Health care" href={ process.env.PUBLIC_URL + "/news" }>Health care</a>
                </li>

                <li className="cat-item">
                    <a title="Medicine" href={ process.env.PUBLIC_URL + "/news" }>Medicine</a>
                </li>
            </ul>
        </div>
    );
};

export default WidgetCategories;
