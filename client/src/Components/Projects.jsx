import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import style from '../Styles/Projects.module.css';

export default function Projects() {

    useEffect(() => {
        Aos.init({duration: 700})
    }, [])

    return (
        <div data-aos="zoom-in" className={style.container}>
            <div className={style.subContainer}>
                <div className={style.title} >
                    <h1>
                        mis proyectos
                    </h1>
                </div>
                
                <div className={style.grid} >
                    <div>
                        <h1>Weather App</h1>
                        <p>Este proyecto fue hecho en henry durante el periodo de estudio</p>
                    </div>
                    <div>
                        <h1>Weather App</h1>
                        <p>Este proyecto fue hecho en henry durante el periodo de estudio</p>
                    </div>
                    <div>
                        <h1>Weather App</h1>
                        <p>Este proyecto fue hecho en henry durante el periodo de estudio</p>
                    </div>
                    <div>
                        <h1>Weather App</h1>
                        <p>Este proyecto fue hecho en henry durante el periodo de estudio</p>
                    </div>
                    <div>
                        <h1>Weather App</h1>
                        <p>Este proyecto fue hecho en henry durante el periodo de estudio</p>
                    </div>
                    <div>
                        <h1>Weather App</h1>
                        <p>Este proyecto fue hecho en henry durante el periodo de estudio</p>
                    </div>
                </div>
            </div>
        </div>
    )
}