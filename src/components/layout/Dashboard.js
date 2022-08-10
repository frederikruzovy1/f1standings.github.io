import React, { Component } from 'react'
import DriversList from '../drivers/DriversList'

export default class
    extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <DriversList />
                </div>
            </div>
        )
    }
}
