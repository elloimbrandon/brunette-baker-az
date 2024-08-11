import { Typography } from "@material-tailwind/react";

interface HeroProps {
    id: string;
    title: string;
    copy: string;
    image: string;
    imageAlt: string;
}
 
export default function About({ id, title, copy, image, imageAlt}: HeroProps) {
    return (
        <>
            {/* consider with the size of the image to remove section and grid-container */}
            {/* <div id={id} className="section"> */}
            <div id={id} className="pt-14 md:pt-0">
                {/* <div className="grid-container flex flex-col md:flex-row w-full justify-center items-center"> */}
                <div className="flex flex-col md:flex-row w-full justify-center items-center">
                    <div className="flex flex-col w-full md:w-1/2 items-center justify-center p-8">
                        <Typography variant="h1" className="text-4xl md:text-7xl font-bold font-rokkitt">
                                {title}
                        </Typography>
                        <hr className="border-2 border-black w-3/4 rounded-full mb-8"/>
                        <Typography variant="lead" className="leading-7 font-sans">
                            {copy}
                        </Typography>
                    </div>
                    <div className="flex flex-col w-3/4 md:w-1/2">
                        <img src={image} alt={imageAlt} className="object-cover object-center w-full h-full rounded-md md:rounded-none"/>
                    </div>
                </div>
            </div>
        </>
    )
}