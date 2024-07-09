import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
 <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Srinivas Pranav</h1>

        <u1 className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#skills" className="footer__link">Skills</a>
            </li>

            <li>
                <a href="#qualifications" className="footer__link">Qualifications</a>
            </li>
        </u1>

        <div className="footer__social">
        <a href="https://www.instagram.com/_srinivas_pranav_/" className="footer__social-link"target={"_blank"}>
            <i class='bx bxl-instagram'></i>
        </a>

        <a href="https://www.linkedin.com/in/srinivas-pranav-kolla-966b2127a/" className="footer__social-link"target={"_blank"}>
        <i class='bx bxl-linkedin'></i>
        </a>

        <a href="https://github.com/" className="footer__social-link"target={"_blank"}>
        <i class='bx bxl-github'></i>
        </a>
        <a href="https://wa.me/qr/KF76FJVE5WZKN1" className="footer__social-link"target={"_blank"}>
        <i class='bx bxl-whatsapp'></i>
        </a>
        </div>

        <span className='footer__copy'>&#169;SrinivasPranav. All rights reserved</span>
    </div>
 </footer>
  )
}

export default Footer
