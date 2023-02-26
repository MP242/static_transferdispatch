import React, { Component } from 'react';
import './Navbar.scss';
import logo_TD from '../../assets/images/logo_TD.svg';
import logo_TD_responsive from '../../assets/images/logo_TD_responsive.svg';
import logo_fb from '../../assets/images/logo_fb.svg';
import logo_insta from '../../assets/images/logo_insta.svg';
import logo_twitter from '../../assets/images/logo_twitter.svg';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <img className='navbar__logo_TD' src={logo_TD} alt="logo transfer dispatch" />
        <img className='navbar__logo_TD_responsive' src={logo_TD_responsive} alt="logo transfer dispatch" />
        <div className='navbar__logo_reseaux'>
          <img className='navbar__logo_reseaux__img' src={logo_fb} alt=" logo facebook" />
          <img className='navbar__logo_reseaux__img' src={logo_insta} alt=" logo instagram" />
          <img className='navbar__logo_reseaux__img' src={logo_twitter} alt=" logo twitter" />
        </div>
      </div>
    );
  }
}

export default Navbar;