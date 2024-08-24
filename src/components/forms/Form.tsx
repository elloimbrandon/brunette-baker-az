import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Form() {
    return (
        <Card color="transparent" shadow={false} className="rounded-lg shadow-lg p-8 mx-2">
            <Typography variant="h4" color="blue-gray">
            Order here
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
            As soon as I recieve your order give me 2-3 days to fufill.<br/> I'll reach out to you regarding pickup/delivery.
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
                        className="focus:border-t-gray-900"
                        containerProps={{
                            className: "!min-w-full",
                        }}
                        labelProps={{
                            className: "hidden",
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