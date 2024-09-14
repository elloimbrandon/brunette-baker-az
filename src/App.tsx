import StickyNavbar from './components/views/StickyNavBar';
import Hero from './components/views/Hero';
import About from './components/views/About';
import BreadCarousel from './components/views/BreadCarousel';
import Order from './components/views/Order';
import Footer from './components/views/Footer';
import { BreadOptions } from './assets/config/Config';

import './assets/css/Global.css'

// TODO:
// - set up 404/routing
// - fix arrow a tag to be wider
// - add new bio picture
// - add social links

function App() {
  return (
    <>
      <StickyNavbar/>
      <Hero 
        title="The Brunette Baker"
        subheader="Crafting artisanal sourdough bread with love: elevating every loaf with time, care, and a dash of passion"
        copy="Located in: Phoenix, AZ"
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
      <Order items={BreadOptions}/>
      <Footer title="The Brunette Baker AZ"/>
    </>
  )
}

export default App
