import { Typography } from "@material-tailwind/react";
import Form from "../forms/Form";

interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface OrderProps {
    items: Item[];
}
 
export default function Order({ items }: OrderProps) {
    return (
        <>
            <section id="order" className="section section__large">
                <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 font-rokkitt text-center">Order</h1>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6">
                    <div className="grid-container flex flex-col items-center">
                        <ul className="mb-10 lg:mb-0 space-y-6 max-w-[440px]">
                            {items.map(item => (
                                <li key={item.id} className="flex flex-col">
                                    <span>
                                        <Typography variant="h3" color="blue-gray" className="text-2xl md:text-4xl font-rokkitt">
                                            {item.name}
                                        </Typography>
                                    </span>
                                    <span>
                                        <Typography variant="paragraph" color="blue-gray" className="text-sm font-medium mb-3">
                                            {item.description}
                                        </Typography>
                                    </span>
                                    <span>
                                        <Typography variant="h4" color="blue-gray" className="text-xl md:text-2xl font-medium font-rokkitt">
                                            ${item.price}
                                        </Typography>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid-container flex flex-col items-center">
                        <Form />
                    </div>
                </div>
            </section>
        </>
    )
}