import StickyNavbar from './StickyNavBar';
import Hero from './Hero';
import About from './About';
import BreadCarousel from './BreadCarousel';
import Order from './Order';
import Footer from './Footer';
import { BreadOptions } from '../../assets/config/Config';

import '../../assets/css/Global.css'

export default function Home() {
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
        copy="As a dedicated solo sourdough bread baker based in Phoenix, AZ, Michelle finds joy in the simplicity and artistry of homemade bread. When she's not perfecting her latest loaf, she spends time with her beloved dogs, enjoying the Arizona sun by relaxing in her pool. Her love for community shines through as she often connects with her neighbors, sharing stories and meals. Passionate about cooking, she’s always experimenting with new recipes, and her adventurous spirit extends to traveling with her husband, exploring new destinations and cultures together."
        image="/images/woman-baker.jpg"
        imageAlt="Woman looking over counter containing bread loaves"
      />
      <Order items={BreadOptions}/>
      <Footer title="The Brunette Baker AZ"/>
    </>
  )
}