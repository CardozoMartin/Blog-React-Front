
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { useForm } from "react-hook-form"

const RegisterForm = () => {
     //RHF --------------------------------------------------
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
     <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={onSubmitRHF(handleSubmit)}>
          <fieldset className="col-span-6 sm:col-span-3">
            <Label  htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
              First Name
            </Label >

            <Input
             register={register}
             options={{
               required: true,
               minLength: 4,
               maxLength: 6000,
             }}
             name="name"
             error={!!errors.name} />

          </fieldset>

          <fieldset className="col-span-6 sm:col-span-3">
            <Label  htmlFor="LastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </Label >

            <Input
             register={register}
             options={{
               required: true,
               minLength: 4,
               maxLength: 6000,
             }}
             name="lastName"
             error={!!errors.lastName} />
          </fieldset>

          <fieldset className="col-span-6">
            <Label  htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </Label >

            <Input
             register={register}
             type="Email"
             options={{
               required: true,
               minLength: 4,
               maxLength: 6000,
             }}
             name="Email"
             error={!!errors.Email} />
          </fieldset>

          <fieldset className="col-span-6 sm:col-span-3">
            <Label  htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </Label >

            <Input
            type="password"
             register={register}
             options={{
               required: true,
               minLength: 4,
               maxLength: 6000,
             }}
             name="password"
             error={!!errors.password} />
          </fieldset>

          

          <fieldset className="col-span-6">
            <Label  htmlFor="MarketingAccept" className="flex gap-4">
            <Checkbox />


              <span className="text-sm text-gray-700">
                I want to receive emails about events, product updates and company announcements.
              </span>
            </Label >
          </fieldset>

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" className="text-gray-700 underline"> terms and conditions </a>
              and
              <a href="#" className="text-gray-700 underline">privacy policy</a>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <Button  className={buttonVariants({ variant: "outline" })}>Register</Button >


            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <a href="#" className="text-gray-700 underline">Log in</a>.
            </p>
          </div>
        </form>
    </>
  )
}

export default RegisterForm