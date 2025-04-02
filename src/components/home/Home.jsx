import React from 'react';
import './Home.css';
import Me from '../../assets/bsi_logo1t.png';
// import Me from '../../assets/avatar1t.png';
// import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
// import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">We are BSI</h1>
                <br />
                <span className="home__education">Your consulting partner</span>

                {/* <HeaderSocials /> */}
                <br />
                <br />

                {/* <a href="#contact" className="btn"> Contact Us</a> */}

                <ScrollDown />
            </div>

            {/* <Shapes /> */}
        </section>
    )
}

export default Home