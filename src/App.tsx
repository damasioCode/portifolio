import BannerComponent from './components/Banner'
import NavComponent from './components/Navbar'
import PortifolioItemComponent from './components/PortifolioItem'
import FooterComponent from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavComponent/>
      <BannerComponent/>
      
      <section className='about'>
        <div className='about__wrapper container'>
          <h1 className='about__title'>Sobre</h1>
          <article className='about__content'>
            <p>Lorem Ipsum is simply dummy text of the printing and typeseLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sum has been the industry's</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typeseLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sum has been the industry's</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typeseLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sum has been the industry's</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typeseLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sum has been the industry's</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typeseLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sum has been the industry's</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typeseLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sum has been the industry's</p>
          </article>
        </div>
      </section>

      <section className='portifolio'>
        <article className='portifolio__wrapper container'>
          <h1 className='portifolio__title'>Portifólio</h1>
          <PortifolioItemComponent data={{ 
            title: 'Project 1', 
            description: 'This project consists of an application for tracking orders. Just enter the tracking code, and if valid, the information is returned in detail. The data comes through an API. Developed with React.js.',
            sorce_code: 'https://github.com/damasioCode',
            live_preview: 'https://github.com/damasioCode',
            image: 'https://png.pngtree.com/thumb_back/fw800/background/20211223/pngtree-minimalism-minimalist-landscape-artist-artwork-digital-art-hd-bear-wallpaper-image_934122.jpg',
          }} />
          <PortifolioItemComponent data={{ 
            title: 'Project 1', 
            description: 'This project consists of an application for tracking orders. Just enter the tracking code, and if valid, the information is returned in detail. The data comes through an API. Developed with React.js.',
            sorce_code: 'https://github.com/damasioCode',
            live_preview: '',
            image: 'https://png.pngtree.com/thumb_back/fw800/background/20211223/pngtree-minimalism-minimalist-landscape-artist-artwork-digital-art-hd-bear-wallpaper-image_934122.jpg',
          }} />

        </article>
      </section>

      <section className='contact'>
        <article className='contact__wrapper container'>
          <h1 className='contact__title'>Contato</h1>
          <p>If you want to carry out a project or chat with me, do not hesitate to send me an email: <a href="mailto:damasio.dan7@gmail.com" className='contact__email'>damasio.dan7@gmail.com</a></p>
          <a href="#" className='button__primary'>Contato</a>
        </article>
      </section>
      <FooterComponent/>

    </div>
  )
}

export default App
