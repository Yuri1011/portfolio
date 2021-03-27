import React from "react"
import "./Header.css"

export function Header() {

    return (
        <div>
            <header className='header'>
                <div className='header_links'>
                <span>
                    <a href="#home" className='text-decoration-none text-white'>Home</a></span>
                    <span>
                    <a href="#about" className='text-decoration-none text-white'>AboutMe</a></span>
                    <span>
                    <a href="#skill" className='text-decoration-none text-white'>Skills</a></span>
                    <span>
                    <a href="#work" className='text-decoration-none text-white'>Works</a></span>
                    <span>
                    <a href="#contact" className='text-decoration-none text-white'>Contacts</a></span>
                </div>
            </header>
            <div className='header_mini text-white'>
                <div>
                    X
                </div>
            </div>
        </div>

    )
}