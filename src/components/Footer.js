import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <div className="FooterNavigation">
            <ul className="FooterNav">
                <a href="/Home" className="Footer-Item"><li><i className="fas fa-home"/>Back Home</li></a>
                <a href="/about" className="Footer-Item"><li><i className="far fa-address-card"/>About Me</li></a>
                <a href="https://github.com/oemerueguer" className="Footer-Item"><li><i className="fab fa-github-square"/>Github Profile</li></a>
            </ul>
            <div className="copyright">
                <i className="copy far fa-copyright"/>oemerueguer
            </div>
            </div>
            
        </div>
    )
}
