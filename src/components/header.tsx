import * as React from 'react';
import Work from './work';
export default class Header2 extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar sticky-top navbar-light bg-light">
                        <a className="navbar-brand" href="#"><img alt="logo image" src={require('./../images/logo.png')} /></a>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Say Hi</button>
                    </nav>
                </div>
                <div className="jumbotron primary-color ">
                    <h1 className="display-4 contents">Hello</h1>
                    <p className="lead contents">It is nice to see you here. Welcome to my site!</p>
                </div>
                <div className="container">
                    <p className="text-center lead-paragraph"  >
                        My name is Nischal (n ih sh - ch uh l). Since the beginning of my journey as Software Engineer I have been keen in designing and developing websites. I am constantly learning and imporving myself. And this site is just an humble way to expose my skills.
                    </p>
                    <hr />
                    <div className="row ">
                        <Work title="Edgenuity Inc" logo="" contents="The places I have worked at" />
                        <Work title="Arizona State University" logo="" contents="The places I have worked at" />
                        <Work title="Infosys Ltd" logo="" contents="The places I have worked at" />
                    </div>
                </div>
            </div>
        );
    }
}