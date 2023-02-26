import { useState } from 'react'
import './index.scss'

const NavComponent = () => {

    const [menu, setMenu] = useState(false);
    
    const toggleMenu = () => {
        setMenu(() => !menu );
    }

    return (
        <header className={`navbar ${menu ? 'active' : ''}`}>
            <div  className='navbar__wrapper container'>
                <div className='navbar__brand'>
                    <a href='#'>damasio.code🔥</a>
                </div>
                <button className='navbar__button' onClick={toggleMenu}>
                    <span className='navbar__button'></span>
                </button>
                <ul className='navbar__menu'>
                    <li>
                        <a href="#about" onClick={toggleMenu}>Sobre</a>
                    </li>
                    <li>
                        <a href="#portifolio" onClick={toggleMenu}>Portifólio</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={toggleMenu}>Contato</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default NavComponent 