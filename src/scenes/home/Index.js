import React, { Component } from 'react';
import './Index.scss';
import logo_TD from '../../assets/images/logo_TD.svg';
import svg_app from '../../assets/images/App-Homeview.svg';
import svg_S2 from '../../assets/images/svg_S2.svg'
import svg_arrow from '../../assets/images/test.svg'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Home__backsvg"></div>              
                <div className='Home__title'>                    
                    <h1 className='Home__title__h1'>WELCOME TO THE NEW</h1>  
                    <h1 className='Home__title__h1'>DRIVING APP </h1>  
                </div>
                <img className='Home__logo_TD' src={logo_TD} alt="logo transfer dispatch" /> 
                <p className='Home__p'>
                    Connect with a community of drivers on Transfer Dispatch. 
                    Share your driving missions an make money, or find the one that fits your needs. 
                    Join us today and start your journey with Transfer Dispatch!
                </p>
                <button className='Home__btn' onClick={() => window.location.href='https://www.google.com'}>
                    <div className='Home__btn__txt'>
                        START NOW! 
                    </div>
                </button>
                <img className='Home__svg_app' src={svg_app} alt="App Homeview" />
                <div className='Home__section2'>
                    <div className="Home__section2__svg_section2"></div>
                    {/* <img className='Home__section2__svg_S2' src={svg_S2} alt="App Homeview" /> */}
                    <p className='Home__section2__p'>“Joining the community of drivers on our platform isn't just about achieving your own goals.  It's about coming together to create a better working experience for all. Join us today and be a part of something big.”</p>
                    <h1 className='Home__section2__h1'>CEO - PAUL BINSARD</h1>
                </div>
                <div className='Home__section3'>
                    <img className='Home__section3__test' src={svg_arrow} alt="App Homeview" />
                </div>
            </div>
        );
    }
}

export default Home;