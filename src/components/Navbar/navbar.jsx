import React from 'react'


import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Autolender</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Loanscheme">Loan Scheme</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Gallery">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" align='right' href="/Login">Log in/Sign up</a>
                            </li>

                            {/* // for link 
                          <li className="nav-item">
                              <a className="nav-link" href="#">Link</a>
                          </li> */}
                            {/* // for dropdown
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Dropdown
                              </a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="#">Action</a></li>
                                  <li><a className="dropdown-item" href="#">Another action</a></li>
                                  <li><hr className="dropdown-divider"/></li>
                                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                               </ul>
                          </li> */}
                            {/* // for disabled 
                           <li className="nav-item">
                              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                          </li> */}
                        </ul>
                        {/* // for seach box
                      <form className="d-flex" role="search">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                              <button className="btn btn-outline-success" type="submit">Search</button>
                      </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar