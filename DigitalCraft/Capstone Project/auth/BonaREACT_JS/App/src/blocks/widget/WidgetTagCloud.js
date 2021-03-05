import React from 'react';

const WidgetTagCloud = () => {
    return (
        <div className="widget widget_tag_cloud">
            <h6 className="widget-title">Tags</h6>

            <div className="tagcloud">
                <a title="Medicine" href={ process.env.PUBLIC_URL + "/news"  }className="tag-cloud-link">Medicine</a>
                <a title="Health" href={ process.env.PUBLIC_URL + "/news"  }className="tag-cloud-link">Health</a>
                <a title="Doctors" href={ process.env.PUBLIC_URL + "/news"  }className="tag-cloud-link">Doctors</a>
                <a title="Hospital" href={ process.env.PUBLIC_URL + "/news"  }className="tag-cloud-link">Hospital</a>
            </div>
        </div>
    );
};

export default WidgetTagCloud;
