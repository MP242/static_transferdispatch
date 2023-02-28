import React, { Component } from 'react';
import './Index.scss';
import logo_TD from '../../assets/images/logo_TD.svg';
import svg_app from '../../assets/images/App-Homeview.svg';
import svg_background from '../../assets/images/background2.svg'
import svg_background_responsive from '../../assets/images/background_mobile.svg'
import svg_S2 from '../../assets/images/svg_S2.svg'
import svg_card from '../../assets/images/svg_card.svg'
// import arrow_p1 from '../../assets/images/arrow_p1.svg'
// import arrow_card from '../../assets/images/arrow_card.svg'
import svg_arrow from '../../assets/images/test.svg'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <img className='Home__svg' src={svg_background} alt="svg background " />
                <img className='Home__svg_mobile' src={svg_background_responsive} alt="svg background " />
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
                    <img className='Home__section2__svg_S2' src={svg_S2} alt="App Homeview" />
                    <p className='Home__section2__p'>“Joining the community of drivers on our platform isn't just about achieving your own goals.  It's about coming together to create a better working experience for all. Join us today and be a part of something big.”</p>
                    <h1 className='Home__section2__h1'>CEO - PAUL BINSARD</h1>
                </div>
                <div className='Home__section3'>
                    <img className='Home__section3__test' src={svg_arrow} alt="App Homeview" />
                    {/* <div className='Home__section3__grid'>
                        <img className='Home__section3__grid__svg_card' src={svg_card} alt="App Homeview" />
                        <p className='Home__section3__grid__p1'>Find a mission by searching for a specific driver, or send a friend request to expand your network and discover new opportunities.</p>                        
                        <p className='Home__section3__grid__p2'>Every mission has a price, giving drivers the chance to earn money and develop their skills.</p>
                        <p className='Home__section3__grid__p3'>Show your support for drivers and their missions by liking and commentingon the opportunities that matter to you.</p>
                        <p className='Home__section3__grid__p4'>Each mission includes location and date details, helping drivers easily find opportunities that fit their schedule and location.</p>
                    </div>
                    <div className='Home__section3__arrow'>
                        <img className='Home__section3__arrow__1' src={arrow_card} alt="App Homeview" />
                    </div> */}
                </div>
            </div>
            
        );
    }
}

export default Home;