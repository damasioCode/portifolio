import './index.scss'

const BannerComponent = () => {
    return (
        <section className='banner'>
            <div className='banner__block container'>
                <p>Eai! 🤙</p>
                <h1 className='spacing'>Eu sou Daniel Damasio.</h1>
                <h1>Desenvolvo coisas pela web.</h1>
                <p className='spacing'>Desenvolvedor Backend focado na criatividade.</p>
                <p>Eu ❤️ o que faço, valoriso boas práticas e código limpo.</p>
                <a href="#" className='button__primary spacing'>Entre em contato</a>
            </div>
        </section>
    )
}

export default BannerComponent 