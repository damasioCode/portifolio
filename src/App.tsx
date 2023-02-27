import BannerComponent from "./components/Banner";
import NavComponent from "./components/Navbar";
import PortifolioItemComponent from "./components/PortifolioItem";
import FooterComponent from "./components/Footer";

import ProjectImage1 from './assets/project_1.png';

function App() {
    return (
        <div className="App">
            <NavComponent />
            <BannerComponent />

            <section className="about" id="about">
                <div className="about__wrapper container">
                    <h1 className="about__title">Sobre</h1>
                    <article className="about__content">
                        <p>Eaai! Me chamo Daniel Damasio e tenho 20 anos.</p>
                        <p>
                            Sou um desenvolvedor apaixonado por codificação, plataforma web e
                            opensource.
                        </p>
                        <p>
                            Auto-didata e um eterno estudante. Adoro criar e contribuir em
                            projetos, pois, isto me ajuda a evoluir e me desenvolver
                            profissionalmente.
                        </p>
                        <p>
                            Minha paixão por tecnologia existe desde a minha infância.
                            Computadores, dispositivos eletrônicos sempre prenderam minha
                            atenção.
                        </p>
                        <p>
                            Sou formado em Desenvolvimento de Sistemas (Técnico) pela escola
                            Centro Paula Souza. Aprendi de tudo um pouco sobre Frontend e
                            Backend.
                        </p>
                        <p>
                            Adoro ajudar pessoas que estão começando na área. Esportes,
                            videogames, músicas e estudos são assuntos que me interessam
                            muito.
                        </p>
                        <p>
                            Vejo estar no caminho certo pois dou meu melhor todos os dias.
                            Alem disso vejo os resultados que as horas dedicadas trazem.
                        </p>
                    </article>
                </div>
            </section>

            <section className="portifolio" id="portifolio">
                <article className="portifolio__wrapper container">
                    <h1 className="portifolio__title">Portifólio</h1>
                    <PortifolioItemComponent
                        data={{
                            title: "Timetracking",
                            description:
                                "Este projeto consiste em um rastreamento de tempo de um determinado usuário relacionado as diversas areas do dia a dia. Projeto desenvolvido em React.JS e dados estáticos",
                            sorce_code: "https://github.com/damasioCode/timetracking",
                            live_preview: "https://damasiocode-timetracking.vercel.app/",
                            image: ProjectImage1,
                        }}
                    />
                </article>
            </section>

            <section className="contact" id="contact">
                <article className="contact__wrapper container">
                    <h1 className="contact__title">Contato</h1>
                    <p>
                        Se você quiser entrar em contato não hesite em mandar um email:
                        <a href="mailto:damasio.dan7@gmail.com" className="contact__email">
                            damasio.dan7@gmail.com
                        </a>
                    </p>
                    <a href="#" className="button__primary">
                        Contato
                    </a>
                </article>
            </section>

            <FooterComponent />
        </div>
    );
}

export default App;
