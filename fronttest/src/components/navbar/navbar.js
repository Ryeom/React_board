import React from 'react';

export function Navbar(props) {
    return (
      <div className="navbar-dark text-white">
        <div className="container">
          <nav className="navbar px-0 navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a href="/" className="pl-md-0 p-3 text-light">HOME</a>
                <a href="/list" className="p-3 text-decoration-none text-light">LIST</a>
                <a href="/board" className="p-3 text-decoration-none text-light">WRITE</a>
                {/* <a href="/board" className="p-3 text-decoration-none text-light">DETAIL</a> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
}

export default Navbar