import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import imgLogo from '../assets/imgs/fondo_body.jpg'
import { useContext } from 'react';
import { Context } from '../contexts/PizzaContext';
import IconCart from './IconCart';

export default function Navigation() {
    const { totalCart, monedaLocal } = useContext(Context);

    return (
        <Navbar sticky="top" className='navbar'>
            <Container>
                <Link to={'/desafio-mammamia/home'} className="logo">
                    <img src={imgLogo} alt="Logo Pizza" width="80px" />
                    <span>Pizzeria Mamma Mia!</span>
                </Link>
                <Link to={'/desafio-mammamia/carrito'} className={totalCart ? 'cart-price' : 'cart'}>
                    <IconCart tamaño="1.3rem" color="white" />
                    {totalCart ? '  ' + monedaLocal(totalCart) : null}
                </Link>
            </Container>
        </Navbar>
    );
}
