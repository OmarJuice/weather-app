import React, { Component } from 'react';
import { connect } from 'react-redux';
class ErrorDisplay extends Component {



    render() {
        return (
            <div className="columns is-centered is-mobile weather-display has-text-white">
                <div className="column is-two-thirds">
                    <h1 className="title is-1 TWBold has-text-light has-text-centered">
                        Error!
                </h1>
                    <h1 className="title is-3 TW has-text-light has-text-centered">
                        {this.props.error.message}
                    </h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        error: state.error
    }
}

export default connect(mapStateToProps, null)(ErrorDisplay);
