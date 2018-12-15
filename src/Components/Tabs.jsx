import React, { Component } from 'react';

class Tabs extends Component {

    render() {
        return (
            <div className="tabs is-toggle is-rounded is-fullwidth TWBold">
                <ul>
                    <li className={this.props.display === 'now' ? "is-active" : "inactive"} >
                        <a className="tab" href="/" onClick={this.props.getDisplay('now')}>

                            <span className="has-text-light">Now</span>
                        </a>
                    </li>
                    <li className={this.props.display === 'day' ? "is-active" : "inactive"}>
                        <a className="tab" href="/" onClick={this.props.getDisplay('day')}>

                            <span className="has-text-light">24hr</span>
                        </a>
                    </li>
                    <li className={this.props.display === 'week' ? "is-active" : "inactive"}>
                        <a className="tab" href="/" onClick={this.props.getDisplay('week')}>

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

export default Tabs;
