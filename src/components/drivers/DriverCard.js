import React, { Component } from 'react';

export default class DriverCard extends Component {
    state = {
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

        return (
            <div className="col-lg-4 col-md-6 col-sm-12 my-3 container">
                <div className="info-card">
                    <div className="info-card-header">
                        <div className="drivers-position-wrap d-flex justify-content-center align-items-center align-self-start position-absolute top-0 start-0 bg-danger fw-bolder">{position}</div>
                        <div className="card-img" id={code}></div>
                        <h3>{familyName}</h3>
                    </div>
                    <div className="content">
                    <p className="mb-2 badge text-bg-danger">{points} points</p>
                    </div>
                </div>
            </div>
        )
    }
}
