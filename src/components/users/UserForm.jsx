import { useForm } from "react-hook-form";
//import Input from "../input/Input";
import { useQueryClient , useMutation } from "@tanstack/react-query";
import { postPublicacionFn } from "../../api/publicacion";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"



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
    <>
      <h1> Publique algo</h1>
      <form action="" onSubmit={onSubmitRHF(handleSubmit)}>
       
        <Textarea
         register={register}
         options={{
           required: true,
           minLength: 4,
           maxLength: 6000,
         }}
         name="publicacion"
         placeholder="Que estas pensando..."
         error={!!errors.publicacion} />
        <div>
        <Button variant="destructive">Destructive</Button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
