import React from "react";
import c from "./Contacts.module.css"
import {Footer} from "../footer/Footer";

export function Contacts() {
    return (
        <section id='contact' className={c.wrapperContact}>
            <div className='container'>
                <div className={c.title}>
                    <div >
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
                        <div className='form'>

                        </div>
                        <form  id="contact-form" action="" method="post">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="form-group">
                                        <input name="name" type="text" className="form-control" required=""
                                               placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="form-group">
                                        <input name="email" type="email" className="form-control" required=""
                                               placeholder="Email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea name="form-message" className="form-control" rows="5" required=""
                                          placeholder="Tell us more about your needs........"></textarea>
                            </div>
                            <p className={c.text_button}>
                                <button id="submit-btn" className={c.button_send}
                                        type="submit">Send Message
                                </button>
                            </p>
                        </form>
                        <div className={c.contacts}>
                            <p className='d-flex'>
                                <span className='d-flex fas fa-phone'><i className='mx-1'>+(375)29 515-82-75</i></span>
                            </p>
                            <p className='d-flex'>
                                <span className="d-flex fas fa-email pe-1"><i className='mx-1'>yury1011.89@gmail.com</i></span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}