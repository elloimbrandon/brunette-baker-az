import '../../assets/css/components/svgs/animated-arrows.css';
import { Link } from 'react-scroll';

const AnimatedArrows = () => {
    return(
        <>
            <Link 
                activeClass="active" 
                to="gallery" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={200}
                className="f-20 cursor-pointer w-full"
            >
                <div className="down-arrow"></div>
            </Link>
        </>
    )
}

export default AnimatedArrows;