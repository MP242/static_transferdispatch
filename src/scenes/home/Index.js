import React, { Component } from 'react';
import './Index.scss';
import logo_TD from '../../assets/images/logo_TD.svg';
import svg_app from '../../assets/images/App-Homeview.svg';
import svg_background from '../../assets/images/background2.svg'


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <img className='Home__svg' src={svg_background} alt="svg background " />
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
            </div>
            
        );
    }
}

export default Home;