import '../../assets/css/components/svgs/animated-arrows.css';

const AnimatedArrows = () => {
    return(
        <a href="#about" data-event-label="see more" className="z-20 cursor-pointer w-full">
            <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
        </a>
    )
}

export default AnimatedArrows;