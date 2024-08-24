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
            <section className="section section__large">
                <div className="grid-container flex flex-col items-center">
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 font-rokkitt">Order</h1>
                    <ul className="mb-20">
                        {items.map(item => (
                            <li key={item.id}>
                                {item.name}:
                                {item.description}
                                <span className="text-red-300">${item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="pb-20 pt-10">
                        <Form />
                    </div>
                </div>
            </section>
        </>
    )
}