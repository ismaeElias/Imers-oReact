import React from 'react';
import Logo from '../../assets/img/Logo.png'
import '../menu/menu.css';
import Button from '../Components/Button';
import {Link }from 'react-router-dom';

/*import ButtonLink from '../Components/ButtonLink'*/
function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="EliasFlix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video
            </Button>
               
        </nav>
    );
}

export default Menu;