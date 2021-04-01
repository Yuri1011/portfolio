import React from "react";
import c from "./Contacts.module.css"
import {Footer} from "../footer/Footer";
import link from "../../assets/icons8-linkidin-48.png";
import insta from "../../assets/icons8-instagram-48.png";
import git from "../../assets/icons8-github-48.png";

export function Contacts() {
    return (
        <section id='contact' className={c.wrapperContact}>
            <div className='container'>
                <div className={c.title}>
                    <div>
                        <h2 className={c.contact}>Contact</h2>
                    </div>
                    <div className={c.minTitle}>
                        <div>
                            <p>Get In Touch</p>
                        </div>
                        <div>
                            <span className={c.contactSpan}></span>
                        </div>
                    </div>
                </div>
                <div className={c.block}>
                    <div className='d-flex flex-column align-items-center col-md-8 col-xl-9 order-0 order-md-1'>
                        <h3 className={c.title_form}>
                            Send Me
                        </h3>

                        <div className={c.contacts}>
                            <p className='d-flex'>
                                <span className='d-flex fas fa-phone'><i className='mx-1'>+(375)29 515-82-75</i></span>
                            </p>
                            <p className='d-flex'>
                                <span className="d-flex fas fa-email pe-1"><i className='mx-1'>yury1011.89@gmail.com</i></span>
                            </p>

                            <ul className={c.ul_social_contacts}>
                                <li>
                                    <a href="https://www.linkedin.com/in/yuri-trypolski-4b1ab6187/" target='_blank'>
                                        <img className='soc_link ' src={link} alt="logo"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/trypolski_yury/" target='_blank'>
                                        <img className='soc_link ' src={insta} alt="logo"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Yuri1011" target='_blank'>
                                        <img className='soc_link rounded-pill ' src={git} alt="logo"/>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}