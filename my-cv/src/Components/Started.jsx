import React from 'react';
import { Link } from 'react-router-dom';
import fondo from '../img/fondo.jpg';
import perfil from '../img/perfil.jpg';
import Style from '../Styles/Started.module.css';

export default function Started() {
    return (
        <div>
            <div className={Style.img} style={{height: "100%", width: "100%"}}>
                <img src={fondo} alt="fondo" style={{height: "100%", width: "100%"}}/>
            </div>
            <div className={Style.containerInfo}>
                <div className={Style.containerPic}>
                    <img className={Style.pic} src={perfil} alt="perfil"/>
                </div>
                <div style={{display: "flex"}}>
                    <h5 className="navbar-brand" style={{color: "yellow", margin: "0px", paddingRight: "2px", fontSize: "3.09375rem", textTransform: "none"}} href="#">{`<`}</h5>
                    <h5 className="navbar-brand" style={{color: "white", margin: "0px", fontSize: "3.09375rem", textTransform: "none"}} href="#">Eric_Gómez</h5>
                    <h5 className="navbar-brand" style={{color: "yellow", margin: "0px", paddingLeft: "5px", fontSize: "3.09375rem", textTransform: "none"}} href="#">{` />`}</h5>
                </div>
            </div>
            <div className={Style.started}>
                <h1 style={{color: "white", border: "3px solid yellow", padding: "8px"}}>
                    Hola!, bienvenid@ a mi portafolio personal.
                </h1>
            </div>
            <div className={Style.startedTwo}>
                <h4 style={{color: "white", width: "700px"}}>
                    Te invito a conocer mas sobre mi y mis proyectos, es un gusto que le eches un vistazo.
                </h4>
            </div>
            <div className={Style.startedTwo} style={{paddingTop: "50px"}}>
                <Link to='/me/about'>
                    <div className={Style.button}>
                        <button className="btn btn-primary">
                            Click para hechar un vistazo
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    )
}