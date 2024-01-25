import { useForm } from "react-hook-form";
import Input from "../input/Input";

const UserForm = (props) => {
  const { setPub } = props;
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
    reset,
  } = useForm();

  const handleSubmit = (data) => {
    console.log(data)

    const newPub = {...data, id:123}
    setPub((prev)=>[...prev, newPub])
    reset();
  };
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
