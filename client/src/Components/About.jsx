import Aos from 'aos';
import React from 'react';
import 'aos/dist/aos.css';
import js from '../img/js.png';
import css from '../img/css.png';
import git from '../img/git.png';
import { useEffect } from 'react';
import icon from '../img/henry.png';
import react from '../img/react.png';
import redux from '../img/redux.png';
import node from '../img/nodejs.png';
import redis from '../img/redis.png';
import postgre from '../img/postgres.png';
import webpackBabel from '../img/babel.png';
import style from '../Styles/About.module.css';


export default function About() {

    useEffect(() => {
        Aos.init({duration: 700})
    })

    return (
        <div data-aos="zoom-in" className={style.container}>
            <div className={style.subContainer}>

                <div className={style.title}>
                    <h1>Primero que nada me gustaría presentarme</h1>
                </div>

                <hr/>

                <div data-aos="zoom-in" className={style.info}>
                    <h6>
                        ¡Hola! Mi nombre es Eric, y soy un Desarrollador Web Fullstack.
                        Tengo 19 años, y mi curiosidad por el mundo de la programación comenzó a los 15 años.
                        Con curiosidad sobre cómo poder crear mi propio videojuego, llegué a "Unity 3D", un motor de videojuegos donde podías aprender a crear juegos de manera sencilla.
                        Hoy en día terminé en un área completamente diferente, como lo es el desarrollo de páginas y aplicaciones web. Pero no abandono mi deseo de aprender a hacer videojuegos profesionales.
                    </h6>
                </div>

                <hr/>
                <hr/>
                <hr/>

                <div data-aos="fade-up" className={style.subTitle}>

                    <div>
                        <a href="https://soyhenry.com" target="_blank">
                            <img src={icon} alt="img" style={{height: "50px", width: "500px", objectFit: "contain"}}/>
                        </a>
                    </div>

                    <h5>
                        Estudié Desarrollo Web Full Stack en un Bootcamp online llamado HENRY, donde aprendí las siguientes tecnologías:
                    </h5>

                </div>
                
                <hr/>
                <hr/>

                <div data-aos="fade-right" className={style.boxs}>
                    <div style={{ marginRight: "25px", width: "120px"}}>
                        <div style={{ display: "flex", justifyContent: "center"}}>
                            <a href="https://es.wikipedia.org/wiki/Git" target="_blank">
                                <img src={git} alt="img" style={{height: "50px", width: "120px", objectFit: "contain"}}/>
                            </a>
                        </div>
                        <h4 style={{textAlign: "center", textTransform: "none"}}>
                            Git
                        </h4>
                    </div>
                    <h6 style={{alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        aprendimos sus comandos básicos y utilizamos github como plataforma principal del curso, por lo que aprendemos a utilizarla teórica y practicamente.
                    </h6>
                </div>

                <hr/>
                <hr/>

                <div data-aos="fade-right" className={style.boxs}>
                    <div style={{ marginRight: "25px", width: "120px"}}>
                        <div style={{ display: "flex", justifyContent: "center"}}>
                            <a href="https://es.wikipedia.org/wiki/JavaScript" target="_blank">
                                <img src={js} alt="img" style={{height: "50px", width: "120px", objectFit: "contain"}}/>
                            </a>
                        </div>
                        <h4 style={{textAlign: "center", textTransform: "none"}}>
                            JavaScript
                        </h4>
                    </div>
                    <h6 style={{alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        Comenzando por estructuras de datos y algoritmos, pasando por Hoisting y Closures, y llegando a Promesas, funciones constructoras, ES6, Programación orientada a objetos, etc.
                    </h6>
                </div>

                <hr/>
                <hr/>

                <div data-aos="fade-right" className={style.boxs}>
                    <div style={{ marginRight: "25px", width: "120px"}}>
                        <div style={{ display: "flex", justifyContent: "center"}}>
                            <a href="https://es.wikipedia.org/wiki/React" target="_blank">
                                <img src={react} alt="img" style={{height: "50px", width: "120px", objectFit: "contain"}}/>
                            </a>
                        </div>
                        <h4 style={{textAlign: "center", textTransform: "none"}}>
                            React
                        </h4>
                    </div>
                    <h6 style={{alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        Donde aprendimos desde lo más básico de la librería, desarrollando pequeños proyectos con lo aprendido. Hasta finalizar con conocimientos de React Hooks, estados, lifecycle, rutas, etc.
                    </h6>
                </div>

                <hr/>
                <hr/>

                <div data-aos="fade-right" className={style.boxs}>
                    <div style={{ marginRight: "25px", width: "120px"}}>
                        <div style={{ display: "flex", justifyContent: "center"}}>
                            <a href="https://es.wikipedia.org/wiki/Redux_(JavaScript)" target="_blank">
                                <img src={redux} alt="img" style={{height: "50px", width: "120px", objectFit: "contain"}}/>
                            </a>
                        </div>
                        <h4 style={{textAlign: "center", textTransform: "none"}}>
                            Redux
                        </h4>
                    </div>
                    <h6 style={{alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        Aprendimos a utilizar esta librería en proyectos React para mantener estados globales y realizar proyectos más facilmente escalables.
                    </h6>
                </div>

                <hr/>
                <hr/>

                <div data-aos="fade-right" className={style.boxs}>
                    <div style={{ marginRight: "25px", width: "120px"}}>
                        <div style={{ display: "flex", justifyContent: "center"}}>
                            <a href="https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada" target="_blank">
                                <img src={css} alt="img" style={{height: "50px", width: "120px", objectFit: "contain"}}/>
                            </a>
                        </div>
                        <h4 style={{textAlign: "center", textTransform: "none"}}>
                            CSS
                        </h4>
                    </div>
                    <h6 style={{alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        Aprendimos a como darle estilos propios y personalizados a nuestra página, también utilizamos Bootstrap, Less, Flexbox, Material UI, etc
                    </h6>
                </div>

                <hr/>
                <hr/>

                <div data-aos="fade-right" className={style.boxs}>
                    <div style={{ marginRight: "25px", width: "120px"}}>
                        <div style={{ display: "flex", justifyContent: "center"}}>
                            <a href="https://es.wikipedia.org/wiki/Node.js" target="_blank">
                                <img src={node} alt="img" style={{height: "50px", width: "120px", objectFit: "contain"}}/>
                            </a>
                        </div>
                        <h4 style={{textAlign: "center", textTransform: "none"}}>
                            NodeJS
                        </h4>
                    </div>
                    <h6 style={{alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        Aprendimos a utilizar módulos de terceros y crear los nuestros propios. Conocimos las librerías nativas de Node.js y las principales librerías externas que vamos a necesitar.
                    </h6>
                </div>

                <hr/>
                <hr/>

                <div data-aos="fade-right" className={style.boxs}>
                    <div style={{ marginRight: "25px", width: "120px"}}>
                        <div style={{ display: "flex", justifyContent: "center"}}>
                            <a href="https://medium.com/@renzocastro/webpack-babel-transpilando-tu-js-502244a61f5b" target="_blank">
                                <img src={webpackBabel} alt="img" style={{height: "50px", width: "120px", objectFit: "contain"}}/>
                            </a>
                        </div>
                        <h4 style={{textAlign: "center", textTransform: "none"}}>
                            webpack + babel
                        </h4>
                    </div>
                    <h6 style={{alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        Aprendimos a configurarlo y preparar un proyecto donde podrémos utilizar todas las funcionalidades de ES6 y JSX en el navegador. Configuramos además un entorno de pruebas para poder ver los cambios en tiempo real y optimizar al máximo el tiempo.
                    </h6>
                </div>

                <hr/>
                <hr/>

                <div data-aos="fade-right" className={style.boxs}>
                    <div style={{ marginRight: "25px", width: "120px"}}>
                        <div style={{ display: "flex", justifyContent: "center"}}>
                            <a href="https://es.wikipedia.org/wiki/PostgreSQL" target="_blank">
                                <img src={postgre} alt="img" style={{height: "50px", width: "120px", objectFit: "contain"}}/>
                            </a>
                        </div>
                        <h4 style={{textAlign: "center", textTransform: "none"}}>
                            PostgreSQL
                        </h4>
                    </div>
                    <h6 style={{alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        Diseño e implementación de base de datos relacional, tambíen conocimos y utilizamos MySql. . Sequelize: Agilización en la implementación de bases de datos relacionales, creación de modelos que pueden ser entendidos por cualquier persona, interacción con la base de datos de manera sencilla.
                    </h6>
                </div>

                <hr/>
                <hr/>

                <div data-aos="fade-right" className={style.boxs}>
                    <div style={{ marginRight: "25px", width: "120px"}}>
                        <div style={{ display: "flex", justifyContent: "center"}}>
                            <a href="https://es.wikipedia.org/wiki/Redis" target="_blank">
                                <img src={redis} alt="img" style={{height: "50px", width: "120px", objectFit: "contain"}}/>
                            </a>
                        </div>
                        <h4 style={{textAlign: "center", textTransform: "none"}}>
                            Redis
                        </h4>
                    </div>
                    <h6 style={{alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    Conocimientos mínimos para poder desarrollar un cache para un mini e-commerce utilizando una API pública.
                    </h6>
                </div>
            </div>
        </div>
    )
}