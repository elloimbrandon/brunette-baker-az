import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Form() {
    return (
        <Card color="transparent" shadow={false} className="rounded-lg shadow-lg p-8 md:mx-2">
            <Typography variant="h4" color="blue-gray">
                Order here
            </Typography>
            <Typography color="gray" className="mt-1 font-normal max-w-[400px]">
                As soon as I recieve your order give me 2-3 days to fufill. I'll reach out to you regarding pickup/delivery.
            </Typography>
            <form className="mt-8 mb-2 w-full">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Name
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="Mike Smith"
                        crossOrigin=""
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        crossOrigin=""
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography
                        variant="h6" color="blue-gray" className="-mb-3"
                    >
                        Your Message
                    </Typography>
                    <Textarea
                        rows={6}
                        color="gray"
                        placeholder="Send me an email with your order items here!"
                        name="message"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        containerProps={{
                            className: "!min-w-full before:content-none after:content-none",
                        }}
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <Button className="mt-6" fullWidth>
                    Submit
                </Button>
            </form>
        </Card>
    )
}