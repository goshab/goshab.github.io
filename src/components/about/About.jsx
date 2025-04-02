import './About.css';

import React from 'react';
import AboutBox from './AboutBox';

import Image from '../../assets/bsi_logo1t.png';
// import Image from '../../assets/avatar1t.png';
// import Resume from '../../assets/resume.pdf';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About</h2>

            {/* <div className="about__container grid"> */}
            <div className="about__container">
                {/* <img src={Image} alt="" className='about__img' /> */}
                {/* <img  alt="" className='about__img' /> */}
                <div></div>

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
With over 20 years of experience in IT development, design, and architecture, we specialize in delivering cutting-edge API management, software development, integration solutions, and DevOps practices. Our proven track record includes designing and implementing scalable, secure, and high-performance systems, with a strong emphasis on API Management, microservices architecture, and cloud technologies.
<br />
<br />
We excel in guiding projects from conception to completion - collaborating with stakeholders to address business challenges, deploying robust API solutions, and providing post go-live support for seamless transitions. Our expertise extends to automating CI/CD pipelines and container orchestration (Kubernetes, OpenShift) across IBM Cloud, AWS, and Azure, ensuring operational efficiency and scalability for our clients.


                        </p>
                        {/* <ul className="about__list">
                            <li>DataPower</li>
                            <li>API Connect</li>
                            <li>Cloud Pak for Integration</li>
                        </ul> */}
                        {/* <button className="btn" onClick={downloadResume}>Donwload CV</button> */}
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* <AboutBox /> */}
        </section>
    )
}

export default About