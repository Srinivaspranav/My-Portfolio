import React from 'react'

const Social = () => {
  return (
      <div className="home__social">
        <a href="https://www.instagram.com/_srinivas_pranav_/" className="home__social-icon"target={"_blank"}>
            <i class='uil uil-instagram'></i>
        </a>

        <a href="https://www.linkedin.com/in/srinivas-pranav-kolla-966b2127a/" className="home__social-icon"target={"_blank"}>
        <i class='uil uil-linkedin-alt'></i>
        </a>

        <a href="https://github.com/" className="home__social-icon"target={"_blank"}>
        <i class='uil uil-github-alt'></i>
        </a>
        <a href="https://wa.me/qr/KF76FJVE5WZKN1" className="home__social-icon"target={"_blank"}>
        <i class='uil uil-whatsapp'></i>
        </a>
      </div>

  );
}

export default Social
