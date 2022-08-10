import React, { Component } from 'react'
import axios from 'axios';

import DriverCard from './DriverCard';

export default class DriversList extends Component {

  state = {
    url: 'http://ergast.com/api/f1/current/driverStandings.json',
    drivers: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    let results = res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    console.log(results);
    console.log(results[0].Driver.familyName)
    this.setState({ drivers: results });
  }

  render() {
    return (
      <React.Fragment>
      {
        this.state.drivers ? (
        <div className="row">
          {this.state.drivers.map(driver => (
            <DriverCard
            key={driver.Driver.code}
            familyName = {driver.Driver.familyName}
            code = {driver.Driver.code}
            position = {driver.position}
            points = {driver.points}
             />
          ))}

        </div>
        ) : (
        <h1>Loading Drivers</h1>)
      }
      </React.Fragment>
    );
  }
}
