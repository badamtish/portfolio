import * as React from 'react';
import Company from './../data/data';

export interface Props {
    company: Company;
}

export default class WorkDetails extends React.Component<Props> {

    render() {
        return (
            <div className="details container ">
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-12">
                        <img className="logo" src={this.props.company.logo} />
                    </div>
                    <div className="col-lg-11 col-lg-11 col-sm-12">
                        <span><strong>{this.props.company.name}</strong> - {this.props.company.designation}</span><br />
                        <span>{this.props.company.dates}</span>
                        <div>
                            {this.props.company.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}