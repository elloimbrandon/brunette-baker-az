import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

interface FooterProps {
    title: string;
}

const currentYear = new Date().getFullYear();

export default function About({ title }: FooterProps) {
    return (
        <>
            <section className="section section__large">
                <footer className="relative w-full">
                    <div className="mx-auto w-full px-8 max-w-[1440px]">
                        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                            <Typography
                                variant="paragraph"
                                className="mb-4 text-center font-medium text-blue-gray-900 md:mb-0 font-rokkitt"
                            >
                                &copy; {currentYear} <a href="/">{title}</a>. All
                                Rights Reserved.
                            </Typography>
                            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                    <FontAwesomeIcon icon={faInstagram} size="xl" color="black" />
                                </Typography>
                                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                    <FontAwesomeIcon icon={faTiktok} size="xl" color="black" />
                                </Typography>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}