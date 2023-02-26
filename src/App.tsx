import BannerComponent from './components/Banner'
import NavComponent from './components/Navbar'
import PortifolioItemComponent from './components/PortifolioItem'
import FooterComponent from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavComponent/>
      <BannerComponent/>
      
      <section className='about' id='about'>
        <div className='about__wrapper container'>
          <h1 className='about__title'>Sobre</h1>
          <article className='about__content'>
            <p>Eaai! Me chamo Daniel Damasio e tenho 20 anos.</p>
            <p>Sou um desenvoledor apaixonado por codificação, plataforma web e código aberto.</p>
            <p>Auto-didata e um eterno estudante. Adoro criar e contribuir com projetos de código aberto, pois, isto me ajuda a evoluir e me desenvolver profissionalmente.</p>
            <p>Minha paixão por tecnologia existe desde a minha infância. Computadores, dispositivos eletrônicos sempre prenderam minha atenção.</p>
            <p>Sou formado em Desenvolvimento de Sistemas (Técnico) pela escola Centro Paula Souza. Aprendi de tudo e um pouco sobre Frontend e Backend.</p>
            <p>Adoro ajudar pessoas que estão começando. Esportes, videogames, musicas e estudos sãao assuntos que me interença muito. </p>
            <p>Vejo estar no caminho certo pois dou meu melhor todos os dias. Alem disso vejo os resultados que as horas dedicadas trazem.</p>
          </article>
        </div>
      </section>

      <section className='portifolio' id='portifolio'>
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

      <section className='contact' id='contact'>
        <article className='contact__wrapper container'>
          <h1 className='contact__title'>Contato</h1>
          <p>Se você quiser entrar em contato não hesite em mandar um email: <a href="mailto:damasio.dan7@gmail.com" className='contact__email'>damasio.dan7@gmail.com</a></p>
          <a href="#" className='button__primary'>Contato</a>
        </article>
      </section>
      <FooterComponent/>

    </div>
  )
}

export default App
