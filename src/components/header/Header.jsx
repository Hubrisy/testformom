import './header.css'
import { FaShoppingCart } from "react-icons/fa";

import List from '../../images/list.png';



const Header = (props) => {

    const totalItems = props.cart.reduce((total, item) => total + +(item.count), 0);

    return(
        <div className='header_block'>
            <>
            <h1>DudchikShop</h1>
            <FaShoppingCart className="cart_icon" onClick={()=>props.switchVisible()} />
            <div className="header_cart-amount" style={{fontSize:'18px'}}>{totalItems}</div>
            </>
            <div className='header_line-container'>
                <div className='line'></div>
                <div className='line_img'>
                    <img src={List} alt="" />
                </div>
                <div className='line'></div>
            </div>
        </div>
    )
}

export default Header;