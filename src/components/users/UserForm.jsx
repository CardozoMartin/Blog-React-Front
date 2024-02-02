import { useForm } from "react-hook-form";
//import Input from "../input/Input";
import { useQueryClient , useMutation } from "@tanstack/react-query";
import { postpublicationFn, putpublicationFn } from "../../api/publication";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { usePublication } from "../../store/usePublication";




const UserForm = () => {
  //RHF --------------------------------------------------
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
    reset,
    setValue
  } = useForm();
   //Zustand --------------------------------------------------

   const { publication, clearPub } = usePublication()
   const isEditing = !!publication

   if(isEditing){
    setValue('publication', publication.publication)
   }
  //TQuery --------------------------------------------------
  const queryClient = useQueryClient();
  const { mutate: postpublication } = useMutation({
    mutationFn: postpublicationFn,
    onSuccess:()=>{
      
      reset();
      queryClient.invalidateQueries('publicationes');
    }
  });

  const { mutate: putPublication } = useMutation({
    mutationFn: putpublicationFn,
    onSuccess:()=>{
      
      reset();
      queryClient.invalidateQueries('publicationes');
      clearPub()
    }
  });
  //Handler --------------------------------------------------

  const handleSubmit = (data) => {
    //agregar un spinner
    if(isEditing){
      putPublication({...data, id: publication.id})
    }else{

      postpublication(data);
    }
    
  };

  //Render --------------------------------------------------
  if(isEditing){
    return(
      <section className="mt-4 content-center grid ">
      
      <form action="" onSubmit={onSubmitRHF(handleSubmit)} className="mx-auto">
    
        <Textarea
          register={register}
          options={{
            required: true,
            minLength: 4,
            maxLength: 6000,
          }}
          name="publication"
          placeholder="¿Qué estás pensando..."
          error={!!errors.publication}
        />
    
        <div className="mt-2">
          
          <Button variant="destructive">Editar</Button>
        </div>
      </form>
    </section>
    )
  }
  return (
    <section className="mt-4 content-center grid ">
      
  <form action="" onSubmit={onSubmitRHF(handleSubmit)} className="mx-auto">

    <Textarea
      register={register}
      options={{
        required: true,
        minLength: 4,
        maxLength: 6000,
      }}
      name="publication"
      placeholder="¿Qué estás pensando..."
      error={!!errors.publication}
    />

    <div className="mt-2">
      
      <Button variant="destructive">Publicar</Button>
    </div>
  </form>
</section>

  );
};

export default UserForm;
