import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return(
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li style={{backgroundImage: 'url(images/paint.jpg)'}}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    {/*<h1>Hi, I'm David!</h1>*/}
                                                    <h1>I am a PhD student in Theoretical Chemistry at the University of Oxford,
                                                        ... .</h1>
                                                    {/*<p><a className="btn btn-primary btn-learn">Download CV <i className="icon-download4" /></a></p>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}