import { Carousel } from "@material-tailwind/react";
import { BreadPictures } from "../../assets/config/Config";

interface PictureProps {
    image: string;
    imageAlt: string;
}

const pictures: PictureProps[] = BreadPictures;

export default function BreadCarousel() {
    return (
        <>
            <section id="gallery" className="section text-center">
                <div className="grid-container">
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 font-rokkitt">Gallery</h1>
                    <div className="flex flex-col justify-center mx-auto items-center max-w-[750px]">
                        <Carousel loop={true} className="rounded-xl">
                            {pictures.map((pic, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={pic.image}
                                        alt={pic.imageAlt}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    );
};