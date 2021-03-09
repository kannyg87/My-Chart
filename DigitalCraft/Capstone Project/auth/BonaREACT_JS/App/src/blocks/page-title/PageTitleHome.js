import React from 'react';
import { connect } from 'react-redux';

const PageTitleHome = (props) => {
    return (
        <section id="page-title" className="block with-img" style={ { backgroundImage: 'url(assets/img/placeholder/1920x800.jpg)' } }>
            <div className="wrapper text-center d-flex">
                <div className="align-self-center w-100">
                    <div className="title">
                        <h1 className="large">My-Chart</h1>
                    </div>

                    <div className="description spacer p-top-lg">
                        <p>We care for you health. So, 99% of our clients recommend us.</p>
                    </div>

                    {
                        !props.auth && (
                            <>
                             <div className="spacer p-top-lg no-space">
                                    <a href={ process.env.PUBLIC_URL + "/signup" } className="btn btn-primary">Sign Up</a>
                                </div>
                                {/* <div className="spacer p-top-lg no-space">
                                    <a href={ process.env.PUBLIC_URL + "/about-us" } className="btn btn-primary">About Me!</a>
                                </div> */}
                               
                            </>
                        )
                    }


                    <nav className="languages lang-position">
                        <ul className="nav">
                            <li className="lang-item current-lang">
                                <a title="En" href={ process.env.PUBLIC_URL + "/" }>En</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="page-title-bg-color"></div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return{
        auth: state.auth.authenticated
    }
}

export default connect(mapStateToProps, null)(PageTitleHome);
