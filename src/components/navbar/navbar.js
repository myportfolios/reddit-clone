import React from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.css'

function Navbar() {
    return (
        <nav>
        <div className="nav-wrapper">
          <ul className="right hide-on-med-and-down">
            <li><a className="waves-effect waves-light btn">Hot</a></li>
            <li><a className="waves-effect waves-light btn">New</a></li>
            <li><a className="waves-effect waves-light btn">Controversial</a></li>
            <li><a className="waves-effect waves-light btn">Top</a></li>
            <li><a className="waves-effect waves-light btn">Rising</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
