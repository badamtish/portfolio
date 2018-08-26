import * as React from 'react';
import Work from './work';
import Logo from './../images/logo.png';
import FooterLogo from './../images/logo-footer.png';
import Edgenuity from './../images/company-logos/edgenuity.png';
import ASU from './../images/company-logos/asu2.png';
import Infosys from './../images/company-logos/infosys.png';
import WorkDetails from './work-details';
import Company from './../data/data';
import Project from './../components/project';

interface State {
    company: Company;
}

export default class Header extends React.Component<{}, State> {
    edgenuity: Company = { name: 'Edgenuity Inc', dates: 'August 2017 - Present', designation: 'Software Engineer Intern', description: 'At Edgenuity I was introduced to React-Redux, and the agile way of developing software. Starting from minor tweaks to the product I progressed to creating complex components and containers in a couple of months. I developed RESTful API endpoints in ASP.NET. I built code pipelines to automatically deploy applications to AWS S3.', logo: Edgenuity };

    asu: Company = { name: 'Arizona State University', designation: 'Student Web Developer', dates: 'August 2017 - May 2018', description: 'Working part-time as Student Web Developer at ASU, exposed me to Drupal. A content management system which can be used to maintain large websites. Here I became adept at HTML, CSS and JavaScript.', logo: ASU };

    infosys: Company = { name: 'Infosys Ltd', designation: 'Senior Systems Engineer', dates: 'October 2013 - December 2016', description: 'Infosys was the beginning of my journey as software engineer. Here I was trained on Java, Oracle Databases, ASP.NET and MSSQL servers. I also became adept at ITIL practices such as Change Management and Configuration Management.', logo: Infosys };

    constructor() {
        super({});
        this.state = { company: this.edgenuity };
    }

    onCardClick = (id: string) => {
        switch (id) {
            case 'Edgenuity Inc': {
                this.setState({ company: this.edgenuity });
                break;
            }
            case 'Arizona State University': {
                this.setState({ company: this.asu });
                break;
            }
            case 'Infosys Ltd': {
                this.setState({ company: this.infosys });
                break;
            }
            default: {
                this.setState({ company: this.edgenuity });
            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar sticky-top navbar-light bg-light">
                        <a className="navbar-brand" href="#"><img alt="logo image" src={Logo} /></a>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Say Hi</button>
                    </nav>
                </div>
                <section className="bgimage">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h5>Hello, world! Full width Hero-unit header</h5>
                                <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                                <p><a href="#" className="btn btn-primary btn-large">Learn more »</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="jumbotron primary-color ">
                    <h1 className="display-4 contents">Hello</h1>
                    <p className="lead contents text-center">It is nice to see you here. Welcome to my site!</p>
                </div>
                <div className="cards">
                    <div className="container">
                        <p className="text-center lead-paragraph"  >
                            My name is Nischal (n ih sh - ch uh l). Since the beginning of my journey as Software Engineer I have been keen in designing and developing websites. I am constantly learning and imporving myself. And this site is just an humble way to expose my skills.
                        </p>
                        <hr />
                        <div className="text-center header-text">
                            <h4>Places I have worked at</h4>
                        </div>
                        <div className="row">
                            <Work title="Edgenuity Inc" logo={Edgenuity} contents={['React-Redux', 'TypeScript', 'ASP.NET', 'MSSQL', 'AWS']} onClick={this.onCardClick} />
                            <Work title="Arizona State University" logo={ASU} contents={['Drupal', 'HTML', 'CSS', 'JavaScript', 'Java']} onClick={this.onCardClick} />
                            <Work title="Infosys Ltd" logo={Infosys} contents={['ASP.NET', 'MSSQL', 'ITIL', 'Remedy', 'Oracle']} onClick={this.onCardClick} />
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row col-12">
                    <WorkDetails company={this.state.company} />
                </div>
                <div className="cards-projects">
                    <div className="container">
                        <div className="text-center header-text">
                            <h4>Academic Projects</h4>
                        </div>
                        <div className="row">
                            <Project title="Compiler Design" tech={['Java', 'Antlr']} onClick={this.onCardClick} />
                            <Project title="Data Analysis" tech={['Python', 'MySQL']} onClick={this.onCardClick} />
                            <Project title="Team Management Solution" tech={['ASP.NET', 'MSSQL']} onClick={this.onCardClick} />
                        </div>
                        <hr />
                    </div>
                </div>

                <div>
                    <nav className="navbar navbar-inverse navbar-fixed-bottom nav-background">
                        <div className="container-fluid">
                            <div className="row col-12">
                                <div className="img-responsive">
                                    <img className="logo" src={FooterLogo} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="footer-content text-center" style={{ fontSize: '1.5rem' }}>
                                    Get to know me better!
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="text-center links-row">
                                    <a href="#" ><span className="links"><i className="fas fa-cloud-download-alt" /></span></a>
                                    <a href="https://www.linkedin.com/in/nischalkumarms/" target="_blank" ><span className="links"><i className="fab fa-linkedin-in" /></span></a>
                                    <a href="https://github.com/badamtish" target="_blank" ><span className="links"><i className="fab fa-github" /></span></a>
                                    <a href="mailto:nischal1991naik@gmail.com" target="_blank" ><span className="links"><i className="far fa-envelope" /></span></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
} 