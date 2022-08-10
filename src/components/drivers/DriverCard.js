import React, { Component } from 'react';

export default class DriverCard extends Component {
    state={
        driver: '',
        familyName: '',
        givenName: '',
        position: '',
        permamentNumber: '',
        points: '',
        code: ''
    };

    render() {
        const familyName = this.props.familyName;
        const position = this.props.position;
        const points = this.props.points;
        const code = this.props.code
        // const url = this.props.url;
        // console.log(driver)

        return (
            <div className="col-md-3 col-sm-6 my-3">
                <div className="card" id={code}>
                    <div className="card-body">
                        <h5 className="card-title">{position}</h5>
                        <p className="card-text badge-danger">{points} points</p>
                        <a href="#" className="btn btn-primary">{familyName}</a>
                    </div>
                </div>
            </div>
        )
    }
}
