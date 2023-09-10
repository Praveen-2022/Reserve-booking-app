import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({item}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light border border-3 px-4 fixed-top">
        <div className="container-fluid">
        <span class="material-icons self-center"><i class="fa-solid fa-bus fs-5 text-warning"></i></span>
          <button className="fs-5 text-warning fw-bold border border-0">RESERVE</button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-4">
                <Link className="nav-link active fw-bold" aria-current="page" to="/">
                  Ticket
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link className="nav-link active fw-bold" to="/">
                  Contact us
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button className="btn btn-warning mx-4 px-4" type="submit">
                {item.name}
              </button>
              <button className="mx-4 px-4 rounded" type="submit">
                {item.profile}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
