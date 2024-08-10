interface HeroProps {
    title: string;
    copy: string;
}
 
export default function Hero({ title, copy }: HeroProps) {
    return (
        <>
            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
                <div className="w-full h-64 lg:w-1/2 lg:h-full">
                    <img className="h-full w-full object-cover" src="/images/cutting-board-bread-hero.jpg" alt="Background Image" />
                </div>
                <div
                    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium lg:text-4xl">{title}</h2>
                        <p className="mt-4">
                            {copy}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

// GRAVEYARD

{/* <div id="hero" className="flex flex-col container justify-center items-start cutting-board-hero w-full h-[250px] md:h-[705px]">
    <h4 className="flex flex-col items-start xl:items-end justify-center title w-full">
        <span className="w-3/4 md:w-3/4">
            <h2 className="text-2xl md:text-6xl">{title}</h2>
            <div className="flex flex-col w-[200px] md:w-[475px]">
            <div className="pt-1 md:pt-4">
                <p className="text-xs md:text-2xl">{copy}</p>
            </div>
            </div>
        </span>
    </h4>
</div> */}

{/* <div className="relative w-full h-screen text-white overflow-hidden">
    <div className="absolute inset-0">
        <img src="/images/cutting-board-bread-hero.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">{title}</h1>
        <p className="text-lg text-gray-300 mb-8">{copy}</p>
    </div>
</div> */}