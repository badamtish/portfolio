import * as React from 'react';
import { Dimmer, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export interface State {
    active: boolean;
}

export interface Props {
    title: string;
    contents: string[];
    logo?: string;
    onClick: (id: string) => void;
}
export default class WorkHoverable extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { active: false };
    }

    handleShow = () => this.setState({ active: true });
    handleHide = () => this.setState({ active: false });
    click(id: string) {
        this.props.onClick(id);
    }
    render() {
        const { active } = this.state;
        const content = (
            <div className="row contents">
                <ul className="list-unstyled text-center ">
                    <React.Fragment>
                        {this.props.contents.map(tech =>
                            <li className="list-items" key={tech}>{tech}</li>
                        )}
                    </React.Fragment>
                </ul>
            </div>
        );

        return (
            <div className="col-sm-12 col-md-4 col-lg-4" onClick={() => this.click(this.props.title)}>
                <div className="card-body">

                    <Dimmer.Dimmable as={Segment} blurring={true} dimmed={active} onMouseEnter={this.handleShow} onMouseLeave={this.handleHide}>
                        <Dimmer active={active} inverted={true} onClickOutside={this.handleHide}>
                            {content}
                        </Dimmer>
                        <div className="row contents">
                            <h4 className="lead lead-color">{this.props.title}</h4>
                        </div>
                        <div className="text-center company-logo-row">
                            <img src={this.props.logo} className="rounded-circle company-logo" />
                        </div>
                    </Dimmer.Dimmable>
                </div>
            </div>

        );
    }
}