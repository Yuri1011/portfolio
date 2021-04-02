import React from "react";
import c from "./Welcome.module.css"

export function Welcome() {
    let textStyle = {
        textDecoration: 'none',
        fontWeight: '600',
        color: 'white',
        fontFamily: 'Poppins sans-serif'
    }

//animation text
    let TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function () {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        let that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };
    window.onload = function () {
        let elements = document.getElementsByClassName('typewrite');
        for (let i = 0; i < elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-type');
            let period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        let css = document.createElement("style");
        css.innerHTML = ".typewrite > .wrap { border-right: 0.2em solid #1e9fd0}";
        document.body.appendChild(css);
    };

    return (
        <section id='home' className={c.wrapperWelcome}>
            <div className={c.bgImg}>
            </div>
            <div className={c.mask}></div>
            <div className={c.content}>
                <div>
                    <h2>Welcome</h2>
                </div>
                <div className={c.text}>
                    <h1>
                        <a href='#' style={textStyle} className={'typewrite'} data-period='2000'
                           data-type='[ "I am Yuri Trypolski.", "I Love to Develop.", "I am a Creative.", "I am Versatile Person."]'>
                            <span className={'wrap'}></span>
                        </a>
                    </h1>
                </div>
                <div>
                    <h3>
                        based in Belarus, Vitebsk.
                    </h3>
                </div>
                <div>
                    <a href='#contact' >
                        <div>
                            <button className={c.welcome_button}>Hire Me</button>
                        </div>
                    </a>
                </div>
            </div>

        </section>
    )
}