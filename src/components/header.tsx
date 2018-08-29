import * as React from 'react';
import Work from './work';
import Logo from './../images/logo.png';
import FooterLogo from './../images/logo-footer.png';
import Edgenuity from './../images/company-logos/edgenuity.png';
import ASU from './../images/company-logos/asu2.png';
import Infosys from './../images/company-logos/infosys.png';
import WorkDetails from './work-details';
import { Company, Projects } from './../data/data';
import Project from './../components/project';
import ProjectDetails from './project-detail';

interface State {
    company: Company;
    project: Projects;
}

export default class Header extends React.Component<{}, State> {
    edgenuity: Company = { name: 'Edgenuity Inc', dates: 'August 2017 - Present', designation: 'Software Engineer Intern', description: 'At Edgenuity I was introduced to React-Redux, and the agile way of developing software. Starting from minor tweaks to the product I progressed to creating complex components and containers in a couple of months. I developed RESTful API endpoints in ASP.NET. I built code pipelines to automatically deploy applications to AWS S3.', logo: Edgenuity };

    asu: Company = { name: 'Arizona State University', designation: 'Student Web Developer', dates: 'August 2017 - May 2018', description: 'Working part-time as Student Web Developer at ASU, exposed me to Drupal. A content management system which can be used to maintain large websites. Here I became adept at HTML, CSS and JavaScript.', logo: ASU };

    infosys: Company = { name: 'Infosys Ltd', designation: 'Senior Systems Engineer', dates: 'October 2013 - December 2016', description: 'Infosys was the beginning of my journey as software engineer. Here I was trained on Java, Oracle Databases, ASP.NET and MSSQL servers. I also became adept at ITIL practices such as Change Management and Configuration Management.', logo: Infosys };

    compiler: Projects = { name: 'Compiler Design', contents: 'In this project, I have designed a lexical analyzer for a programming language named Nirvana. The lexical analyzer was developed using Antlr. And the compiler was developed using Java. The runtime environment and the Command Line Interface was developed using Java.' };
    dataAnalysis: Projects = { name: 'Weather Data Analysis', contents: 'This project invloved the analysis of historical weather data of up to 15 years, pulled from NOAA. The data was cleaned using Box-Plots to remove outliers and coverted to Pandas data frames. The ARIMA model was used to perform analysis of the time series data, and achieved 80% accuracy in prediction.' };
    teamManagements: Projects = { name: 'Team Management Solution', contents: 'In this project a team management solution was developed for the ASU Polytechnic Soccer team. The database was developed using MSSQL server and the UI was developed using ASP.NET.' };

    constructor() {
        super({});
        this.state = { company: this.edgenuity, project: this.compiler };
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
            case 'Compiler Design': {
                this.setState({ project: this.compiler });
                break;
            }
            case 'Weather Data Analysis': {
                this.setState({ project: this.dataAnalysis });
                break;
            }
            case 'Team Management Solution': {
                this.setState({ project: this.teamManagements });
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
                        <a className="btn btn-outline-success my-2 my-sm-0" href="mailto:nischal1991naik@gmail.com">Say Hi</a>
                    </nav>
                </div>
                <section className="bgimage">
                    <div className="container-fluid">
                        <div className="hero-message text-center">
                            Design and Develop
                        </div>
                        <div className="hero-sub-message text-center">
                            One Step at a Time
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
                            <Project title="Weather Data Analysis" tech={['Python', 'MySQL']} onClick={this.onCardClick} />
                            <Project title="Team Management Solution" tech={['ASP.NET', 'MSSQL']} onClick={this.onCardClick} />
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row col-12">
                    <ProjectDetails contents={this.state.project} />
                </div>
                <div>
                    <nav className="navbar navbar-inverse navbar-fixed-bottom nav-background">
                        <div className="container-fluid">
                            <div className="row col-12">
                                <div className="img-responsive">
                                    <a href="#"><img className="logo" src={FooterLogo} /></a>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="footer-content text-center" style={{ fontSize: '1.5rem' }}>
                                    Get to know me better!
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="text-center links-row">
                                    <a href="https://1drv.ms/b/s!AlKmxc0L239S5XHM47LMOLFvKq4N" target="_blank"><span className="links"><i className="fas fa-cloud-download-alt" /></span></a>
                                    <a href="https://www.linkedin.com/in/nischalkumarms/" target="_blank" ><span className="links"><i className="fab fa-linkedin-in" /></span></a>
                                    <a href="https://github.com/badamtish" target="_blank" ><span className="links"><i className="fab fa-github" /></span></a>
                                    <a href="mailto:nischal1991naik@gmail.com" target="_blank" ><span className="links"><i className="far fa-envelope" /></span></a>
                                </div>
                                <div className="foot-note text-center">Designed and developed using <a className="foot-link" href="https://reactjs.org/" target="_blank">React</a> by &copy;&nbsp;<a href="https://www.linkedin.com/in/nischalkumarms/" target="_blank" className="foot-link">Nischal Kumar</a></div>
                                <div className="foot-note text-center">Logo made with <a className="foot-link" href="https://www.designevo.com/en/" title="Free Online Logo Maker" target="_blank">DesignEvo</a></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
} 