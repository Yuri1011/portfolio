import React from "react";
import c from "./AboutMe.module.css"

export function AboutMe() {
    let color = {
        color: '#20c997',
        fontWeight: 'bold'
    }
    let text = {
        fontFamily: 'Poppins sans-serif',
        fontWeight: '300',
        fontSize: '1.2em'
    }
    return (
        <section id='about' className={c.wrapperAbout}>
            <div className={c.title}>
                <div>
                    <h2 className={c.aboutMe}>About Me</h2>
                </div>
                <div className={c.minTitle}>
                    <div>
                        <p>Know Me More</p>
                    </div>
                    <div>
                        <span className={c.aboutSpan}></span>
                    </div>
                </div>
            </div>
            <div className={c.info}>
                <div className={c.aboutMeText}>
                    <h2>I'm <span style={color} className={c.name}>Yuri Trypolski</span> , Front-end Developer.</h2>
                    <p style={text}>
                        I am at the stage of training as a Front-end developer. I currently have several projects of my
                        own. I try to develop in terms of website development, applications and programming in general.
                        I study English. I am also interested in animation and modeling. I have a little experience in
                        freelancing. I am actively involved in sports, I like computer games, chess, draw, solve logic
                        problems, read paper books.
                    </p>
                </div>
                <div className={c.infoMini}>
                    <ul className={c.ulInfo}>
                        <li className={c.li_text}>
                            <p>
                                <span style={text}>Name</span> : Yury Tripolski
                                <span className={c.aboutSpan}></span>
                            </p>

                        </li>
                        <li className={c.li_text}>
                            <p>
                                <span style={text}>Email</span>: yury1011.89@gmail.com
                                <span className={c.aboutSpan}></span>
                            </p>
                        </li>
                        <li className={c.li_text}>
                            <p>
                                <span style={text}>Age</span>: 31
                                <span className={c.aboutSpan}></span>
                            </p>
                        </li>
                        <li className={c.li_text}>
                            <p>
                                <span style={text}>From</span>: Vitebsk,Belarus
                                <span className={c.aboutSpan}></span>
                            </p>
                        </li>

                        <div className={c.button_CV}>
                            <a href="https://disk.yandex.by/i/b9lhZThZnT_oqw"
                               className={'btn btn-success text-break border-success border-5 rounded-pill btn-lg'}
                               target={'_blank'}>
                                <div className={c.style_CV}>Open CV</div>
                            </a>
                        </div>

                    </ul>
                </div>
            </div>
        </section>

    )
}