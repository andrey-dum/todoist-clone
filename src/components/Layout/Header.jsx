import React from 'react'
import { VscColorMode } from 'react-icons/vsc';
import logo from '../../img/logo.png'


export default function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li>
                            <VscColorMode />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
