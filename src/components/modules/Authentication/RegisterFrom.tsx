import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import Password from "@/components/ui/password"
import { useRegisterMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"
import { useNavigate } from "react-router"

// ✅ Zod Schema
const formSchema = z
  .object({
    name: z.string().min(2, { error: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z.string().min(8, { error: "Password must be 8 characters long." }),
    confirmPassword: z.string().min(8, { error: "Confirm password is too short." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don’t match.",
    path: ["confirmPassword"],
  })

function RegisterForm() {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("Register started....")
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password
    };
    console.log(userInfo)
    try {
      const result = await register(userInfo).unwrap();
      if (result.success) {
        toast.success('Register Successfull', {id : toastId});
        navigate("/login")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-700 via-emerald-900 to-slate-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Create an Account
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-transparent text-white placeholder:text-gray-400 border-white/30 focus:border-emerald-400"
                      placeholder="Enter your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-transparent text-white placeholder:text-gray-400 border-white/30 focus:border-emerald-400"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <Password
                      className="bg-transparent text-white placeholder:text-gray-400 border-white/30 focus:border-emerald-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Confirm Password</FormLabel>
                  <FormControl>
                    <Password
                      className="bg-transparent text-white placeholder:text-gray-400 border-white/30 focus:border-emerald-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="default"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors"
            >
              Register
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-emerald-400 hover:underline">
            Login here
          </a>
        </p>
      </motion.div>
    </div>
  )
}

export default RegisterForm
