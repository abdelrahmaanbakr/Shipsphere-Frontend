import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Link } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;


const Login = () => {
    const [loading, setLoading] = useState(false);
  
    const {
      register,
      handleSubmit,
      formState: { errors, isValid },
    } = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: "onChange",
    });
  
    const onSubmit = async (data: FormData) => {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1200));
      console.log(data);
      setLoading(false);
    };
  
  return (
    <div className="pt-20 min-h-screen lg:h-screen grid lg:grid-cols-2">

      {/* LEFT PANEL */}
      <div className="hidden lg:flex flex-col justify-between h-full px-16 py-12 bg-linear-to-br from-blue-600 to-blue-700 text-white">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-3 rounded-lg text-xl">🚚</div>
          <span className="text-xl font-semibold tracking-wide">
            ShipCompare
          </span>
        </div>

        {/* TEXT */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Compare shipping rates globally in seconds
          </h1>

          <p className="text-lg opacity-90">
            The world's most advanced logistics comparison platform.
            Save up to 40% on your international freight costs today.
          </p>
        </div>

        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
          className="rounded-2xl shadow-2xl w-full max-h-65 object-cover"
        />

        {/* BADGE */}
        <div className="text-center text-sm opacity-80">
          Enterprise Grade Security
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex items-center justify-center h-full px-6 bg-gray-50 dark:bg-gray-900">

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
        >
          {/* TITLE */}
          <h2 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">
            Welcome Back
          </h2>

          <p className="text-gray-500 mb-8">
            Please enter your details to sign in to your account.
          </p>

          {/* EMAIL */}
          <div className="mb-5">
            <label className="text-sm text-gray-600">Email address</label>

            <input
              {...register("email")}
              placeholder="name@company.com"
              className={`mt-1 w-full px-4 py-3 rounded-lg border outline-none transition
              focus:ring-2 focus:ring-blue-500
              ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <div className="flex justify-between text-sm">
              <label>Password</label>
              <Link to="/forgot" className="text-blue-600 text-sm">
                Forgot password?
              </Link>
            </div>

            <input
              type="password"
              {...register("password")}
              className={`mt-1 w-full px-4 py-3 rounded-lg border outline-none transition
              focus:ring-2 focus:ring-blue-500
              ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* CHECKBOX */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <input type="checkbox" />
            <span>Remember me for 30 days</span>
          </div>

          {/* BUTTON */}
          <button
            disabled={!isValid || loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
            hover:bg-blue-700 transition
            disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-7 text-gray-400 text-sm">
            <div className="flex-1 h-px bg-gray-300"></div>
            OR CONTINUE WITH
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* GOOGLE BUTTON */}
          <button
            type="button"
            className="w-full border py-3 rounded-lg hover:bg-gray-100 transition font-medium"
          >
            Continue with Google
          </button>

          {/* FOOTER */}
          <p className="text-center text-sm mt-7">
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Sign up for free
            </span>
          </p>
        </form>

      </div>
    </div>
  )
}

export default Login
