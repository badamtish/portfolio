import * as React from 'react';

export interface Props {
    title: string;
    contents: string[];
    logo?: string;
    onClick: (id: string) => void;
}

export default class Work extends React.Component<Props> {
    click(id: string) {
        this.props.onClick(id);
    }

    render() {
        return (
            <div className="col-sm-12 col-md-4 col-lg-4" onClick={() => this.click(this.props.title)}>
                <div className="card" >
                    <div className="card-body">
                        <div className="row contents">
                            <h4 className="lead">{this.props.title}</h4>
                        </div>
                        {this.props.logo ?
                            <div className="text-center company-logo-row">
                                <img src={this.props.logo} className="rounded-circle company-logo" />
                            </div> : null}
                        <div className="row contents">
                            <ul className="list-unstyled text-center">
                                <React.Fragment>
                                    {this.props.contents.map(tech =>
                                        <li key={tech}>{tech}</li>
                                    )}
                                </React.Fragment>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}