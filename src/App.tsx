import { useState } from 'react'
import reactLogo from './assets/react.svg'
import BannerComponent from './components/Banner'
import NavComponent from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavComponent/>
      <BannerComponent/>
      
      <section className='about'>
        <div className='about__wrapper container'>
          <h1 className='about__title'>About</h1>
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
    </div>
  )
}

export default App
