import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div style={{display: "flex"}}>
                <Link to='/'>
                    <h5 className="navbar-brand" style={{color: "yellow", margin: "0px", paddingRight: "2px", fontSize: "2.09375rem", textTransform: "none"}}>{`<`}</h5>
                    <h5 className="navbar-brand" style={{margin: "0px", fontSize: "2.09375rem", textTransform: "none"}}>Eric_Gómez</h5>
                    <h5 className="navbar-brand" style={{color: "yellow", margin: "0px", paddingLeft: "5px", fontSize: "2.09375rem", textTransform: "none"}}>{` />`}</h5>
                </Link>
            </div>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Proyectos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sobre Mi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}