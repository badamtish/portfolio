import * as React from 'react';

export interface Props {
    logo: string;
    dates: string;
    company: string;
    content: string;
}

export default class WorkDetails extends React.Component<Props> {
    render() {
        return (
            <div className="details">
                <div className="container row">
                    <img src={this.props.logo} />
                    <div>
                        <span>{this.props.company}</span><br />
                        <span>{this.props.dates}</span>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </div>
            </div>
        );
    }
}