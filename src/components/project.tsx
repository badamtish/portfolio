import * as React from 'react';

export interface Props {
    title: string;
    tech: string[];
    onClick: (id: string) => void;
}
export default class Project extends React.Component<Props> {
    click(id: string) {
        this.props.onClick(id);
    }

    render() {
        return (
            <div className="col-sm-12 col-md-4 col-lg-4 projects" onClick={() => this.click(this.props.title)}>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="title-section col-8">
                                {this.props.title}
                            </div>
                            <div className="col-4 tech-section">
                                <React.Fragment>
                                    <ul className="list-unstyled ">
                                        {this.props.tech.map(tech =>
                                            <li key={tech}>{tech}</li>
                                        )}
                                    </ul>
                                </React.Fragment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}