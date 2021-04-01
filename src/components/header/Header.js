import React from "react"
import "./Header.css"

export function Header() {

    function menuOpen() {
        const menu = document.querySelector('#menu');
        const band = document.querySelector('#band');
        const links = document.querySelector('#links-mini-title');
        const cross = document.querySelector('#cross');
        if (menu.classList.contains('header_mini')) {
            menu.classList.add('header_mini2');
            links.classList.remove('menu-none');
            links.classList.add('menu');
            band.style.display = 'none';
            cross.style.display = 'flex';
            menu.append(links);
        }
    }

    function menuClosed() {
        const menu = document.querySelector('#menu');
        const band = document.querySelector('#band');
        const links = document.querySelector('#links-mini-title');
        const cross = document.querySelector('#cross');
        if (menu.classList.contains('header_mini')) {
            menu.classList.remove('header_mini2');
            menu.classList.add('header_mini');
            links.classList.add('menu-none');
            links.classList.remove('menu');
            band.style.display = 'flex';
            cross.style.display = 'none';
            menu.append(band);
        }
    }

    return (
        <section className={'section-header'}>
            <header className={'header'}>
                <div className={'header_links'}>
                <span>
                    <a href="#home" className={'text-decoration-none text-white'}>Home</a></span>
                    <span>
                    <a href="#about" className={'text-decoration-none text-white'}>AboutMe</a></span>
                    <span>
                    <a href="#skill" className={'text-decoration-none text-white'}>Skills</a></span>
                    <span>
                    <a href="#work" className={'text-decoration-none text-white'}>Works</a></span>
                    <span>
                    <a href="#contact" className={'text-decoration-none text-white'}>Contacts</a></span>
                </div>
            </header>
            <div className={'block-cross-menu'}>
                <span id={'cross'} className={'text-danger cross'} onClick={menuClosed}>X</span>
                <div id={'menu'} className='header_mini text-white' onClick={menuOpen}>
                    <div id={'band'} className={'band-block'}>
                        <span className={'band'}></span>
                        <span className={'band'}></span>
                        <span className={'band'}></span>
                    </div>
                </div>
            </div>
            <span id={'links-mini-title'}>
                 <a href="#home" className={'text-decoration-none'}>Home</a>
                <a href="#about" className={'text-decoration-none'}>AboutMe</a>
                <a href="#skill" className={'text-decoration-none'}>Skills</a>
                <a href="#work" className={'text-decoration-none'}>Works</a>
                <a href="#contact" className={'text-decoration-none'}>Contacts</a>
            </span>
        </section>
    )
}
