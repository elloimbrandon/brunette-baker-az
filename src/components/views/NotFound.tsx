import StickyNavbar from './StickyNavBar';
import Hero from './Hero';
import Footer from './Footer';

export default function NotFound() {
  return (
    <>
        <StickyNavbar notFound={true}/>
        <Hero 
            title="404 Not Found"
            subheader=""
            copy=""
            image="/images/cutting-board-bread-hero.jpg"
            imageAlt="3 loaves of bread on a cutting board"
            notFound={true}
        />
        <Footer notFound={true} title="The Brunette Baker AZ"/>
    </>
  )
}