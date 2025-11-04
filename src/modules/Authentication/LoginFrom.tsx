import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion } from "framer-motion"

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
import Password from "@/components/Password"

// ✅ Validation Schema
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
})

function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log("Login data:", values)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-emerald-900 to-emerald-700 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Please log in to continue
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <Password
                      placeholder="Enter your password"
                      className="bg-transparent text-white placeholder:text-gray-400 border-white/30 focus:border-emerald-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <a
                href="#"
                className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors"
            >
              Login
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-gray-300 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-emerald-400 hover:underline">
            Register here
          </a>
        </p>
      </motion.div>
    </div>
  )
}

export default LoginForm
