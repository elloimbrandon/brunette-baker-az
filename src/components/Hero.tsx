import AnimatedArrows from './svgs/AnimatedArrows';

interface HeroProps {
    title: string;
    copy: string;
    image: string;
    imageAlt: string;
}
 
export default function Hero({ title, copy, image, imageAlt }: HeroProps) {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <img src={image} alt={imageAlt} className="object-cover object-center w-full h-full"/>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative flex flex-col justify-center items-center h-full text-white">
                    <div className='text-center w-full md:w-3/4 lg:w-1/2 mx-4 px-4'>
                        <h1 className="text-4xl md:text-7xl font-bold mb-2 md:mb-4 font-rokkitt">{title}</h1>
                        <p className="text-xl md:text-4xl mb-4 md:mb-6 text-center leading-6 font-rokkitt">{copy}</p>
                    </div>
                    <hr className="border-2 w-1/2 md:w-1/3 rounded-full"/>
                </div>
                <AnimatedArrows/>
            </div>
        </>
    )
}