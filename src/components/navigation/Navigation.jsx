import React from "react";
import logo from "../../assets/65681193_800x600.jpg"
import insta from "../../assets/icons8-instagram-48.png"
import link from "../../assets/icons8-linkidin-48.png"
import git from "../../assets/icons8-github-48.png"
import svg from "../../assets/Gear-0.4s-200px.svg"
import "./Navigation.css"

export function Navigation() {
    const styleComponent = {
        containerLinks: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
            paddingRight: 'var(--bs-gutter-x,.75rem)',
            paddingLeft: 'var(--bs-gutter-x,.75rem)',
            marginRight: 'auto',
            marginLeft: 'auto'
        },
        linkNav: {
            display: 'block',
            textDecoration: 'none',
            padding: '1rem'
        },
    }
    const bg = () => {
        let nav = document.querySelector('nav');
        let link = document.querySelectorAll('#colorLink');
        if (!nav.classList.contains('silver')) {
            nav.classList.add('silver');
            link.forEach(l => {
                l.classList.add('colorBlack');
                l.classList.remove('colorWhite');
            })
        } else {
            link.forEach(l => {
                l.classList.remove('colorBlack');
                l.classList.add('colorWhite');
            })
            nav.classList.remove('silver');
        }
    }

    return (
        <div>
            <nav id='nav'
                 className={'nav black'}>
                <div>
                    <a href="https://disk.yandex.by/i/AdkURAyy8hxVBg"
                       className={'text-decoration-none'}
                       target='_blank'>
                        <span>
                            <img src={logo}
                                 className={'foto img-thumbnail bg-dark border-pill d-block'}
                                 title="I'm Yuri"
                                 alt="logo"/>
                        </span>
                        <h1 className={'h1_Name_Title text-white fw-bold'}>Yuri Trypolski</h1>
                    </a>
                    <div
                        style={styleComponent.containerLinks}>
                        <ul className={'ul_List_Links'}>
                            <li className={'nav-item'}>
                                <a id='colorLink'
                                   className={'colorWhite'}
                                   style={styleComponent.linkNav}
                                   href="#home">Home</a>
                            </li>
                            <li>
                                <a id='colorLink'
                                   className={'colorWhite'}
                                   style={styleComponent.linkNav}
                                   href="#about">About
                                    Me</a>
                            </li>
                            <li>
                                <a id='colorLink'
                                   className={'colorWhite'}
                                   style={styleComponent.linkNav}
                                   href="#skill">My
                                    Skills</a>
                            </li>
                            <li>
                                <a id='colorLink'
                                   className={'colorWhite'}
                                   style={styleComponent.linkNav}
                                   href="#work">My
                                    Works</a>
                            </li>
                            <li>
                                <a id='colorLink'
                                   className={'colorWhite'}
                                   style={styleComponent.linkNav}
                                   href="#contact">Contacts</a>
                            </li>
                        </ul>
                    </div>
                    <ul className={'ul_social'}>
                        <li>
                            <a href="https://www.linkedin.com/in/yuri-trypolski-4b1ab6187/"
                               target='_blank'>
                                <img className={'soc_link '}
                                     src={link}
                                     alt="logo"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/trypolski_yury/"
                               target='_blank'>
                                <img className={'soc_link '}
                                     src={insta}
                                     alt="logo"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Yuri1011"
                               target='_blank'>
                                <img className={'soc_link rounded-pill '}
                                     src={git}
                                     alt="logo"/>
                            </a>
                        </li>
                        <a href="#nav">
                            <img id='svg'
                                 className={' svg'}
                                 src={svg}
                                 alt="svg"
                                 onClick={bg}/>
                        </a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}