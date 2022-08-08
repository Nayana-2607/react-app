import React from 'react';
//import { Navbar, Container, Offcanvas, Nav, Form, FormControl, Button } from 'react-bootstrap'
import styles from '../Styles/Navbar.module.css';
function Navigator() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div>
          <h2>7k cimenas</h2>
        </div>
        <div>
          <form>
            <input className={`form-control ${styles.search}`} type="search" placeholder="Search" />
          </form>
        </div>
        <div>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight">
            Toggle right offcanvas
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Offcanvas right</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">...</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navigator;
