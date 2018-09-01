import * as React from 'react';
import { Reveal } from 'semantic-ui-react';

export interface Props {
    title: string;
    tech: string[];
    onClick: (id: string) => void;
}

export default class ProjectHoverable extends React.Component<Props> {
    click(id: string) {
        this.props.onClick(id);
    }

    render() {
        return (
            <div className="col-sm-12 col-md-4 col-lg-4 projects" onClick={() => this.click(this.props.title)}>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <Reveal animated="move" className="card-section">
                                <Reveal.Content visible={true}>
                                    <div className="title-section text-center">{this.props.title}</div>
                                </Reveal.Content>
                                <Reveal.Content hidden={true} >
                                    <ul className="list-unstyled text-center tech-section">
                                        {this.props.tech.map(tech =>
                                            <li key={tech}>{tech}</li>
                                        )}
                                    </ul>
                                </Reveal.Content>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}