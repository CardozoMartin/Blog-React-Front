import { useForm } from "react-hook-form";
import Input from "../input/Input";
import { useMutation } from "@tanstack/react-query";

const UserForm = () => {
  //RHF --------------------------------------------------
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
    reset,
  } = useForm();
  //TQuery --------------------------------------------------
 useMutation
  //Handler --------------------------------------------------

  const handleSubmit = (data) => {
    console.log(data)

    const newPub = {...data, id:123}
    setPub((prev)=>[...prev, newPub])
    reset();
  };



  //Render --------------------------------------------------
  return (
    <>
      <h1> Publique algo</h1>
      <form action="" onSubmit={onSubmitRHF(handleSubmit)}>
        <Input
          register={register}
          options={{
            required: true,
            minLength: 4,
            maxLength: 6000,
          }}
          name="publicacion"
          placeholder="Que estas pensando..."
          error={!!errors.publicacion}
        ></Input>
        <div>
          <button>Publicar</button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
