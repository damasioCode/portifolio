import './index.scss'

const BannerComponent = () => {
    return (
        <section className='banner'>
            <div className='banner__block container'>
                <p>Hi there! 🤙</p>
                <h1 className='spacing'>I am Dan Damasio.</h1>
                <h1>I develop things.</h1>
                <p className='spacing'>Backend focused creative developer.</p>
                <p>I ❤️ what i do, i value good practices and clean code.</p>
                <a href="#" className='button__primary spacing'>Hire Me</a>
            </div>
        </section>
    )
}

export default BannerComponent 