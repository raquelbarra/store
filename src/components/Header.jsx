import '../styles/Header.css'
import logo from '../assets/americanas.png'
import { CartContext } from '../contexts/CartContext'
import { useContext } from 'react'
import { Link } from "react-router-dom";

export default function Header() {

    const {shop} = useContext(CartContext);

    return(
        <div>
            <div className='header'>
                <div className="header-left">
                    <img src={logo} alt="" height={30}/>
                    <div>
                        <h1>Loja Online</h1>
                    </div>
                </div>
                <div className='header-right'>
                    <Link to="/">
                    <h3>Carrinho</h3>
                    <span>{shop?.length??""}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
