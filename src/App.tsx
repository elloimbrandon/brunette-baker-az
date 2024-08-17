import StickyNavbar from './components/views/StickyNavBar';
import Hero from './components/views/Hero';
import About from './components/views/About';
import BreadCarousel from './components/views/BreadCarousel';
import Order from './components/views/Order';

import './assets/css/Global.css'

// Need to work on scroll

function App() {

  const breadOptions = [
    { id: 1, name: 'Traditional Sourdough', description: 'Idk a description for bread', price: 12 },
    { id: 2, name: 'Pizza Sourdough', description: 'Idk a description for bread', price: 16 },
    { id: 3, name: 'Cinnamon Raisin Sourdough', description: 'Idk a description for bread', price: 16 },
    { id: 4, name: 'Rosemary Seasalt Sourdough', description: 'Idk a description for bread', price: 14 },
  ]

  return (
    <>
      <StickyNavbar/>
      <Hero 
        title="The Brunette Baker"
        copy="Crafting artisanal sourdough bread with love: elevating every loaf with time, care, and a dash of passion"
        image="/images/cutting-board-bread-hero.jpg"
        imageAlt="3 loaves of bread on a cutting board"
      />
      <BreadCarousel/>
      <About 
        id="about"
        title="Meet the baker"
        copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
        image="/images/woman-baker.jpg"
        imageAlt="Woman looking over counter containing bread loaves"
      />
      <Order items={breadOptions}/>
    </>
  )
}

export default App
