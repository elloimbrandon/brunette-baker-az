import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

interface FooterProps {
    notFound: boolean;
    title: string;
}

const currentYear = new Date().getFullYear();

export default function About({ title, notFound }: FooterProps) {
    return (
        <>
            <section className={!notFound ? "section section__large" : "section mt-0"}>
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
                                <Typography className="opacity-80 transition-opacity hover:opacity-100">
                                    <a href="https://www.instagram.com/mrill/" rel="noopener" target="_blank" data-event-label="Instagram Logo">
                                        <FontAwesomeIcon icon={faInstagram} size="xl" color="black" />
                                    </a>
                                </Typography>
                                <Typography className="opacity-80 transition-opacity hover:opacity-100">
                                    <a href="https://www.tiktok.com/@mishelt32" rel="noopener" target="_blank" data-event-label="TikTok Logo">
                                        <FontAwesomeIcon icon={faTiktok} size="xl" color="black" />
                                    </a>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}