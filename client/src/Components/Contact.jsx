import React, { useEffect } from 'react';
import style from '../Styles/Contact.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {

    useEffect(() => {
        Aos.init({duration: 700})
    }, [])

    return (
        <div data-aos="zoom-in" className={style.container}>
            <div className={style.subContainer}>
                <h1>
                    Contacto
                </h1>
            </div>
        </div>
    )
}