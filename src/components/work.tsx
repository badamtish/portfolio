import * as React from 'react';

export interface Props {
    title: string;
    contents: string[];
    logo: string;
}

export default class Work extends React.Component<Props> {
    render() {
        return (
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <div className="row contents">
                            <h4 className="lead">{this.props.title}</h4>
                        </div>
                        <div className="text-center company-logo-row">
                            <img src={this.props.logo} className="rounded-circle company-logo" />
                        </div>
                        <p className="row contents">
                            <ul className="list-unstyled text-center">
                                <React.Fragment>
                                    {this.props.contents.map(tech =>
                                        <li className="" key={tech}>{tech}</li>
                                    )}
                                </React.Fragment>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}