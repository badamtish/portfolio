import * as React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <section className="hero is-primary ">
                    <div className="hero-head">
                        <nav className="navbar has-background-white">
                            <div className="container">
                                <div className="navbar-brand">
                                    <a className="navbar-item">
                                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                                    </a>
                                    <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                                        <span />
                                        <span />
                                        <span />
                                    </span>
                                </div>
                                <div id="navbarMenuHeroA" className="navbar-menu">
                                    <div className="navbar-end">
                                        <span className="navbar-item">
                                            <a className="button is-primary is-inverted">
                                                <span className="icon">
                                                    <i className="fa fa-github" />
                                                </span>
                                                <span>Say Hi!</span>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="hero-body  has-background-white">
                        <div className="container has-text-centered">
                            <div className="columns is-flex is-centered">
                                <div className="column">
                                    <h1 className="title has-text-primary">My name is Nischal</h1>
                                </div>
                            </div>
                            <h2 className="subtitle">
                                Subtitle
                            </h2>
                        </div>
                    </div>

                    <div className="hero-foot">
                        <nav className="tabs">
                            <div className="container">
                                <ul>
                                    <li className="is-active"><a>Overview</a></li>
                                    <li><a>Modifiers</a></li>
                                    <li><a>Grid</a></li>
                                    <li><a>Elements</a></li>
                                    <li><a>Components</a></li>
                                    <li><a>Layout</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </section>
            </div>
        );
    }
}