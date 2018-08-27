import * as React from 'react';
import { Projects } from './../data/data';

export interface Props {
    contents: Projects;
}

export default class ProjectDetails extends React.Component<Props> {
    render() {
        return (
            <div className="details container">
                <div className="row">
                    <div className="text-center col-12" style={{ width: '100%' }}>
                        <div className="project-title">
                            {this.props.contents.name}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="text-center col-12" style={{ width: '100%' }}>
                        <div className="project-content">
                            {this.props.contents.contents}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}