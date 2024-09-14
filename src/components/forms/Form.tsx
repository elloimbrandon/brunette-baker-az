import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<IFormInput>({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const accessKey = import.meta.env.VITE_WEB3_API_KEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "The Brunette Baker Inc",
      subject: "New message from your website form",
    },
    onSuccess: (msg: string) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg: string) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <Card color="transparent" shadow={false} className="rounded-lg shadow-lg p-8 md:mx-2">
        {!isSuccess ? 
            <>
                <Typography variant="h3" color="black">
                    Email me
                </Typography>
                <Typography color="gray" className="mt-1 font-normal max-w-[400px]">
                    As soon as I receive your order, give me 2-3 days to fulfill. I'll reach out to you regarding pickup/delivery.
                </Typography>
                <Typography color="gray" className="mt-1 font-normal max-w-[400px]">
                    (Phoenix, AZ only)
                </Typography>
                <form className="mt-8 mb-2 w-full" onSubmit={handleSubmit(onSubmit as SubmitHandler<IFormInput>)}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Mike Smith"
                            required
                            label="Name"
                            type="text"
                            crossOrigin=""
                            className={`${errors.name ? "!border-red-500" : "!border-t-blue-gray-200 focus:!border-t-gray-900"}`}
                            {...register("name", {
                                required: "Name is required",
                                maxLength: 80,
                            })}
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                        {errors.name && (
                            <div className="-my-4 text-red-600">
                                <small>{errors.name.message}</small>
                            </div>
                        )}
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            label="Email"
                            type="email"
                            crossOrigin=""
                            {...register("email", { required: "Email is required" })}
                            required
                            className={`${errors.email ? "!border-red-500" : "!border-t-blue-gray-200 focus:!border-t-gray-900"}`}
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                        {errors.email && (
                            <div className="-my-4 text-red-600">
                                <small>{errors.email.message}</small>
                            </div>
                        )}
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Order
                        </Typography>
                        <Textarea
                            rows={6}
                            required
                            label="message"
                            {...register("message", { required: "Message is required" })}
                            className={`${errors.message ? "!border-red-500" : "!border-t-blue-gray-200 focus:!border-t-gray-900"}`}
                            containerProps={{
                                className: "!min-w-full before:content-none after:content-none",
                            }}
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                        {errors.message && (
                            <div className="-my-4 text-red-600">
                                <small>{errors.message.message}</small>
                            </div>
                        )}
                    </div>
                    <Button className="mt-8" type="submit" fullWidth disabled={isSubmitting || isSuccess }>
                        Submit
                    </Button>
                </form>
                {isSubmitSuccessful && !isSuccess && (
                    <div className="mt-3 text-sm text-center text-red-500">
                        {/* use message to debug if broken */}
                        {"Something went wrong... Please try later"}
                    </div>
                )}
            </> : <>
                {isSubmitSuccessful && isSuccess && (
                    <div className="flex flex-col items-center justify-center text-center space-y-5">
                        <Typography variant="h3" color="green">
                            {message || "Email sent successfully!"}
                        </Typography>
                        <Typography variant="paragraph" color="black">
                            Thanks for your order.. I'll get back to you as soon as I can!
                        </Typography>
                    </div>
                )}
            </>
        }
    </Card>
  );
}
