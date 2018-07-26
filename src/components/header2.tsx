import * as React from 'react';
import Work from './work';
export default class Header2 extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar sticky-top navbar-light bg-light">
                        <a className="navbar-brand" href="#"><img src="./../images/myAvatar.svg" /></a>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </nav>
                </div>
                <div className="jumbotron primary-color ">
                    <h1 className="display-4 contents">Hello</h1>
                    <p className="lead contents">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p className="lead contents">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
                <div className="container">
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