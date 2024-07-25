import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SignupValidation from "@/lib/validation";

const SignupForm = () => {
    const isLoading =true;
    // 1. Define your form.
    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof SignupValidation>) => {
        console.log(values);
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <div className="flex flex-col items-center mb-8">
                <img src="/assets/images/logo.svg" alt="logo" className="w-32 h-auto" />
                <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new account</h2>
                <p className="text-light-3 small-medium md:base-regular mt-4 text-center">
                    To use SneakPeek enter your account details
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                {/*<FormLabel>Name</FormLabel>*/}
                                <FormControl>
                                    <Input type="text" className="shad-input" placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                {/*<FormLabel>Username</FormLabel>*/}
                                <FormControl>
                                    <Input type="username" className="shad-input" placeholder="Username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="email" className="shad-input" placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="password" className="shad-input" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full shad-button_primary">
                        {isLoading ? (
                            <div className="flex-center gap-2">
                                Loading...
                            </div>
                        ):"Sign up"}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default SignupForm;
