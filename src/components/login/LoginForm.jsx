import { useForm } from "react-hook-form";
import Input from "../input/Input"
import { Link } from "react-router-dom";


const LoginForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit: onSubmitRHF,
      } = useForm();

      const handleSubmit = (data)=>{
        console.log(data)

      }
  return (
   <>
   <form action="" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={onSubmitRHF(handleSubmit)}>
      <p className="text-center text-lg font-medium">Sign in to your account</p>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <fieldset className="relative">
            <Input
            register={register}
            options={{
              required: true,
              minLength: 4,
              maxLength: 60,
            }}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            
            name="usuario"
            placeholder="Enter usser"
            error={!!errors.publication}></Input>
        </fieldset>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <fieldset className="relative">
            <Input
            register={register}
            options={{
              required: true,
              minLength: 4,
              maxLength: 6000,
            }}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            type="password"
            name="password"
            placeholder="Enter password"
            error={!!errors.publication}></Input>
        </fieldset>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>

      

      <p className="text-center text-sm text-gray-500">
        No account?
        <Link className="underline" to="/register">Sign up</Link>
      </p>
    </form>
   </>
  )
}

export default LoginForm