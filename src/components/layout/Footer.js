import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
  render() {
    return (
        <footer className="text-center text-white mt-auto">
        <div className="p-4 pb-0">
          <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/frederikruzovy1/f1-driver-standings-app" target="_blank" role="button"
              ><div><FontAwesomeIcon icon="fa-brands fa-github" /></div></a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/frederik-ruzovy-0663051a1/" target="_blank" role="button"
              ><div><FontAwesomeIcon icon="fa-brands fa-linkedin" /></div></a>
          </section>
        </div>
        <div className="text-center">
          Just an app made by <img src="images/formula-1-new-seeklogo.com.svg" alt="f1 logo" width="60px" height="60px"/> fan.</div>
      </footer>
    )
  }
}
