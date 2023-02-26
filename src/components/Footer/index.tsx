import './index.scss'

const FooterComponent = () => {
    const currentTime = new Date()

    return (
        <footer className='footer'>
            <div className='footer__wrapper container'>
                <ul className='footer__menu'>
                    <li>
                        <a href="#about">Sobre</a>
                    </li>
                    <li>
                        <a href="#portifolio">Portifólio</a>
                    </li>
                    <li>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
                <p className='footer__copy'>© {currentTime.getFullYear()} - Daniel Damasio</p>
            </div>
        </footer>
    )
}

export default FooterComponent 