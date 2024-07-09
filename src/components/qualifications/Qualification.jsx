import React from 'react';
import"./Qualification.css";

const Qualification = () => {
  return (
   <section className="qualification section">
    <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">
            My personel journey
        </span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification __active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon">
                    </i>
                    Education
                </div>

                <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon">
                    </i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <h3 className="qualification__title">Computer Science & Systems Engineering</h3>
                        <span className="qualification__subtitle">Andhra University College of engineering</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                            2021 - Present
                        </div>
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line">

                        </span>
                    </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line">

                        </span>
                    </div>
                        </div>
                        <h3 className="qualification__title">JAVA Advanced DSA Programming </h3>
                        <span className="qualification__subtitle">Edureka</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                            2022 - 2023
                        </div>
                     
                    </div>
                    <div className="qualification__data">
                        <div>
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line">

                        </span>
                    </div>
                        </div>
                        <h3 className="qualification__title">Web Development </h3>
                        <span className="qualification__subtitle">Robocoupler.pvt.ltd</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                            5th June 2022 - 5th July 2022
                        </div>
                     
                    </div>

                </div>
            </div>
            
        </div>
   </section>
  )
}

export default Qualification
