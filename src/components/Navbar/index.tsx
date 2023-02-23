import './index.scss'

const NavComponent = () => {
    return (
        <header className='navbar'>
            <div className='navbar__wrapper container'>
                <div className='navbar__brand'>
                    <a href='#'>damasio.code🔥</a>
                </div>
                <ul className='navbar__menu'>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default NavComponent 