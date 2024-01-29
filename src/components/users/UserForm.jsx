import { useForm } from "react-hook-form";
//import Input from "../input/Input";
import { useQueryClient , useMutation } from "@tanstack/react-query";
import { postPublicacionFn } from "../../api/publicacion";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const UserForm = () => {
  //RHF --------------------------------------------------
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
    reset,
  } = useForm();
  //TQuery --------------------------------------------------
  const queryClient = useQueryClient();
  const { mutate: postPublicacion } = useMutation({
    mutationFn: postPublicacionFn,
    onSuccess:()=>{
      
      reset();
      queryClient.invalidateQueries('publicaciones');
    }
  });
  //Handler --------------------------------------------------

  const handleSubmit = (data) => {
    postPublicacion(data);
    
  };

  //Render --------------------------------------------------
  return (
    <section className=" mt-3 border-solid border-white">
  <form action="" onSubmit={onSubmitRHF(handleSubmit)} className="mx-auto">

    <Textarea
      register={register}
      options={{
        required: true,
        minLength: 4,
        maxLength: 6000,
      }}
      name="publicacion"
      placeholder="¿Qué estás pensando..."
      error={!!errors.publicacion}
    />

    <div className="mt-2">
      <Button variant="destructive">Destructive</Button>
    </div>
  </form>
</section>

  );
};

export default UserForm;
