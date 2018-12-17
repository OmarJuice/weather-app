import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayChange } from '../actions';

class Tabs extends Component {

    componentDidMount() {
    }

    changeDisplay(e, display) {
        e.preventDefault();
        this.props.displayChange(display)
    }

    render() {
        return (
            <div className="tabs is-toggle is-rounded is-fullwidth TWBold">
                <ul>
                    <li className={this.props.displayed === 'CURRENTLY' ? "is-active" : "inactive"} >
                        <a className="tab" href="/" onClick={(e) => this.changeDisplay.apply(this, [e, 'CURRENTLY'])}>

                            <span className="has-text-light">Now</span>
                        </a>
                    </li>
                    <li className={this.props.displayed === 'HOURLY' ? "is-active" : "inactive"}>
                        <a className="tab" href="/" onClick={(e) => this.changeDisplay.apply(this, [e, 'HOURLY'])}>

                            <span className="has-text-light">24hr</span>
                        </a>
                    </li>
                    <li className={this.props.displayed === 'DAILY' ? "is-active" : "inactive"}>
                        <a className="tab" href="/" onClick={(e) => this.changeDisplay.apply(this, [e, 'DAILY'])}>

                            <span className="has-text-light">This Week</span>
                        </a>
                    </li>
                    <li>
                        <a id="logo-tab" href="https://omarjuice.github.io/" className="has-text-centered" target="_blank" rel="noopener noreferrer">

                            <span className="is-invisible">OJ</span>
                        </a>
                    </li>

                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        displayed: state.displayed
    }
}
export default connect(mapStateToProps, { displayChange })(Tabs)
