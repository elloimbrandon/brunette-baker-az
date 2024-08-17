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
                <div className="flex flex-col md:flex-row w-full justify-start md:justify-center items-center">
                    <div className="flex flex-col items-start justify-center p-8 space-y-4 w-full md:min-w-[376px] md:w-1/2 md:justify-start">
                        <Typography variant="h1" className="border-4 border-l-0 border-r-0 border-t-0 border-black text-3xl md:text-5xl lg:text-6xl font-bold font-rokkitt">
                            {title}
                        </Typography>
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