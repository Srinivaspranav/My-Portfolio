import React, { useState } from 'react';
import"./Qualification.css";

const Qualification = () => {
 const [toggleState, setToggleState] = useState(1);
 
 const toggleTab =(index) => {
    setToggleState(index);
 };

  return (
   <section className="qualification section">
    <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">
            My personel journey
        </span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 
                ? "qualification__button qualification __active button--flex" : "qualification__button button--flex"
                }onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon">
                    </i>
                    Education
                </div>

                <div className={toggleState === 2 
                ? "qualification__button qualification __active button--flex" : "qualification__button button--flex"
                }onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon">
                    </i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? 
                    "qualification__content qualification__content-active" : "qualification__content"
                }>
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
                        <span className="qualification__line">CGPA : 7.77</span>
                    </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                        <h3 className="qualification__title">Borad Of Intermediate </h3>
                        <span className="qualification__subtitle">Sri Viswa Junior College</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                            2019 - 2021
                        </div>
                     
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line">
                        Percentage:93.2%
                        </span>
                    </div>
                        </div>
                      
                    </div>
                    <div className="qualification__data">
                        <div>
                        <h3 className="qualification__title">10th Board SSC </h3>
                        <span className="qualification__subtitle">Sri Chaitanya Techno School</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                             2018 - 2019
                        </div>
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line">GPA: 9.7 </span>
                    </div>
                        </div>
                     
                    </div>

                </div>

                <div className={toggleState === 2 ? 
                    "qualification__content qualification__content-active" : "qualification__content"
                }>
                    <div className="qualification__data">
                        <h3 className="qualification__title">
                        Artificial Intelligence and Machine Learning(Summer Internship and Training)</h3>
                        <span className="qualification__subtitle">Remarkskill</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                            10th June 2024 - 20th July 2024
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
                        <h3 className="qualification__title">Web Developer and Designer Intern
                        </h3>
                        <span className="qualification__subtitle">Vallem Softech Solutions Pvt . Ltd</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                            1st June 2024– 1st July 2024
                        </div>
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line">

                        </span>
                    </div>
                        </div>
                        
                     
                    </div>

                    <div className="qualification__data">
                        <div>
                        <h3 className="qualification__title">Full Stack Developer Intern </h3>
                        <span className="qualification__subtitle">Dr Pallamsetti Innovations.pvt.ltd</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                            Jan 2024 - April 2024
                        </div>
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line">

                        </span>
                    </div>
                        </div>
                        
                     
                    </div>

                    <div className="qualification__data">
                        <div>
                        <h3 className="qualification__title">JAVA Advanced DSA Programming </h3>
                        <span className="qualification__subtitle">Edureka</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                            24TH AUG 2023 - 24TH DEC 2023
                        </div>
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line">

                        </span>
                    </div>
                        </div>
                        
                     
                    </div>
                    
                    <div className="qualification__data">
                        <div>
                        <h3 className="qualification__title">Web Development Intern  </h3>
                        <span className="qualification__subtitle">Robocoupler.pvt.ltd</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                            5th June 2022 - 5th July 2022
                        </div>
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line">

                        </span>
                    </div>
                        </div>
                       
                     
                    </div>

                </div>
            </div>
            
        </div>
   </section>
  )
}

export default Qualification
