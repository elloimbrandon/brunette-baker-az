import StickyNavbar from './components/StickyNavBar';
import Hero from './components/Hero';
import About from './components/About';

import './assets/css/Global.css'

// Need to work on scroll

function App() {
  return (
    <>
      <StickyNavbar/>
      <Hero 
        title="The Brunette Baker"
        copy="Crafting artisanal sourdough bread with love: elevating every loaf with time, care, and a dash of passion"
        image="/images/cutting-board-bread-hero.jpg"
        imageAlt="3 loaves of bread on a cutting board"
      />
      <About 
        id="about"
        title="Meet the baker"
        copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
        image="/images/woman-baker.jpg"
        imageAlt="Woman looking over counter containing bread loaves"
      />
    </>
  )
}

export default App
