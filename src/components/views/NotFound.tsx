import StickyNavbar from './StickyNavBar';
import Hero from './Hero';
import Footer from './Footer';

export default function NotFound() {
  return (
    <>
        <StickyNavbar/>
        <Hero 
            title="404 Not Found"
            subheader=""
            copy=""
            image="/images/cutting-board-bread-hero.jpg"
            imageAlt="3 loaves of bread on a cutting board"
        />
        <Footer title="The Brunette Baker AZ"/>
    </>
  )
}