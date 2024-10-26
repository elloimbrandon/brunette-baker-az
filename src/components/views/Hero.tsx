import {Button} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

interface HeroProps {
    title: string;
    subheader: string;
    copy: string;
    image: string;
    imageAlt: string;
    notFound: boolean;
}
 
export default function Hero({ title, subheader, copy, image, imageAlt, notFound}: HeroProps) {
    const navigate = useNavigate();

    return (
        <>
            <section className="relative w-full h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <img src={image} alt={imageAlt} className="object-cover object-center w-full h-full"/>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative flex flex-col justify-center items-center h-full text-white">
                    {!notFound ? <div className='text-center w-full md:w-3/4 lg:w-1/2 mx-4 px-4 max-w-[700px]'>
                        <h1 className="text-4xl md:text-7xl font-bold mb-2 md:mb-4 font-rokkitt">{title}</h1>
                        <p className="text-xl md:text-4xl mb-4 md:mb-6 text-center leading-6 font-rokkitt">{subheader}</p>
                        <p className="text-xl md:text-4xl mb-4 md:mb-6 text-center leading-6 font-rokkitt">{copy}</p>
                    </div>:
                    <>
                        <h1 className="text-4xl md:text-7xl font-bold mb-2 md:mb-4 font-rokkitt">{title}</h1>
                        <Button className="w-3/4 mb-8 md:w-1/4 bg-white text-black" type="button" onClick={() => navigate("/")}>
                            Go home
                        </Button>
                    </>}
                    
                    <hr className="border-2 w-1/2 md:w-1/3 rounded-full max-w-[462px]"/>
                </div>
            </section>
        </>
    )
}