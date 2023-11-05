
import React from 'react'

import './autolender.css'


import aboutMe from '../../assets/me-about.png'

const About = () => {
    return (
        <div>

            <section id="about">


                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            {/* //use curly bracket for source eg "src={aboutMe}" */}
                            <img src={aboutMe} alt="About Image" width={200} height={300} />
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="about__cards">

                        </div>
                        <p>
                            Hey, We are <strong>Autolender</strong>, need a loan...?
                            <br />
                            We provide automated service for loan management with transparency and security

                        </p>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About