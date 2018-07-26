import * as React from 'react';

export interface Props {
    title: string;
    contents: string;
    logo: string;
}
export default class Work extends React.Component<Props> {
    render() {
        return (
            <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className="row contents">
                    <h4 className="lead">{this.props.title}</h4>
                </div>
                <img src={this.props.logo} />
                <p className="row contents">{this.props.contents}</p>
            </div>
        );
    }
}