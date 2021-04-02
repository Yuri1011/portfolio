import React from "react";
import c from "./Summary.module.css";
import certificate from "../../assets/Certificate.jpg";
import certificateUdemy from "../../assets/UdemyCertBlender.jpg";
import certificateJSUdemy from "../../assets/certificeteJSUdemy.jpg";

export function Summary() {

    let styleComponent = {

        html: {
            width: '90%',
            backgroundColor:'green'
        },
        css: {
            width: '90%',
            backgroundColor:'green'
        },
        js:{
          width:'60%',
            backgroundColor:'orange'
        },
        react:{
          width:'55%',
            backgroundColor:'darkorange'
        },
        typescript: {
            width:'45%',
            backgroundColor: 'darkred'
        },
        boot:{
         width: '40%',
            backgroundColor: 'darkred'
        },
        redux:{
            width:'50%',
            backgroundColor:'tomato'
        }
    }

    return (
        <section id='skill' className={c.wrapperWelcome}>
            <div className={c.title}>
                <h2 className={c.summaryMe}>Summary</h2>
                <p className={c.minTitle}>Resume
                    <span className={c.summarySpan}></span>
                </p>
            </div>
            <div className={c.block_skills}>
                <div className={c.container_serf}>
                    <h4 className={c.title_serf}>my education</h4>
                    <div className={c.educ_block_1}>
                        <p className={c.data_year}>2020 year.</p>
                        <h5>3D Modeling</h5>
                        <p className={c.curs}>VideoSmile</p>
                        <p className={c.text_curs}>Completed a course on 3D modeling and animation in the Blender program.</p>
                        <div>
                            <a href="https://disk.yandex.by/i/VvdfwlKJT9Q0eQ" target={'_blank'}>
                                <img className={'card-img'} src={certificate} alt="certificate"/>
                            </a>
                        </div>
                    </div>
                    <div className={c.educ_block_2}>
                        <p className={c.data_year}>2020 year.</p>
                        <h5>3D sculpting and retopology</h5>
                        <p className={c.curs}>Udemy</p>
                        <p className={c.text_curs}>Mastered organic sculpting in the Blender program.</p>
                        <div>
                            <a href="https://disk.yandex.by/i/KOXgTCrNBHcV5Q" target={'_blank'}>
                                <img className={'card-img'} src={certificateUdemy} alt="certificate"/>
                            </a>
                        </div>
                    </div>
                    <div className={c.educ_block_3}>
                        <p className={c.data_year}>2021 year.</p>
                        <h5>JavaScript and React</h5>
                        <p className={c.curs}>Udemy</p>
                        <p className={c.text_curs}>An interesting, difficult and very informative course in JavaScript and React</p>
                        <div>
                            <a href="https://disk.yandex.by/i/V-O5Quav7CitZw" target={'_blank'}>
                                <img className={'card-img'} src={certificateJSUdemy} alt="certificate"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className={c.title_progress}>My Progress</p>
            <div className={c.blockProgress}>
                <div>
                    <div className={c.progress}
                         role="progressbar"
                         aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={styleComponent.html}>HTML =>
                        90%
                    </div>
                </div>
                <div>
                    <div className={c.progress}
                         role="progressbar"
                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={styleComponent.css}>CSS => 90%
                    </div>
                </div>
                <div>
                    <div className={c.progress}
                         role="progressbar"
                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={styleComponent.js}>JavaScript => 60%
                    </div>
                </div>
                <div>
                    <div className={c.progress}
                         role="progressbar"
                         aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={styleComponent.react}>React => 55%
                    </div>
                </div>
                <div>
                    <div className={c.progress}
                         role="progressbar"
                         aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={styleComponent.typescript}>TypeScript => 45%
                    </div>
                </div>
                <div>
                    <div className={c.progress}
                         role="progressbar"
                         aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={styleComponent.boot}>BootStrap => 40%
                    </div>
                </div>
                {/*<div>*/}
                {/*    <div className={c.progress}*/}
                {/*         role="progressbar"*/}
                {/*         aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={styleComponent.redux}>Redux => 50%*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}