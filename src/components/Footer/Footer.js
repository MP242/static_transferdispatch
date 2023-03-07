import React,{Component} from 'react';
import './Footer.scss';
import svg_footer from '../../assets/images/copyright.svg';

class Footer extends Component {
    render() {
        return(
        <div className='footer'>
            <img className='footer__svg' src={svg_footer} alt="footer" />
            <p>2022 TransferDispatch Inc.</p>
        </div>
        );
    }
}

export default Footer;