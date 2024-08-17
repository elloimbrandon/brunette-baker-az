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
        <section className="section section__large">
            <div id={id} className="grid-container">
                <div className="flex flex-col md:flex-row w-full justify-start md:justify-center items-center md:space-x-10">
                    <div className="flex flex-col items-start justify-center pb-8 md:p-10 space-y-4 w-full max-w-[675px] md:min-w-[470px] md:w-1/3 md:justify-start">
                        <Typography variant="h1" className="border-4 border-l-0 border-r-0 border-t-0 border-black text-3xl md:text-5xl lg:text-6xl font-bold font-rokkitt">
                            {title}
                        </Typography>
                        <Typography variant="lead" className="leading-7 font-sans">
                            {copy}
                        </Typography>
                    </div>
                    <div className="flex flex-col max-w-[350px] ">
                        <img src={image} alt={imageAlt} className="object-cover object-center w-full h-full rounded-md"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}