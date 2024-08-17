import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Form() {
    return (
        <Card color="transparent" shadow={false} className="rounded-lg shadow-lg p-8">
            <Typography variant="h4" color="blue-gray">
            Order here
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
            As soon as I recieve the order give me 2-3 days to fufill
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Name
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="name@mail.com"
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
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Password
                    </Typography>
                    <Input
                    type="password"
                    size="lg"
                    crossOrigin=""
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                </div>
                <Checkbox crossOrigin=""
                    label={
                    <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center font-normal"
                    >
                        I agree the
                        <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900"
                        >
                        &nbsp;Terms and Conditions
                        </a>
                    </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth>
                    Submit
                </Button>
            </form>
        </Card>
    )
}