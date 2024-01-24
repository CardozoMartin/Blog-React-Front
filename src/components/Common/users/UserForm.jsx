import { useForm } from "react-hook-form";
import Input from "../input/Input";

const UserForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();


  const handleSubmit = (data)=>{

  }
  return (
    <>
      <h1> Publique algo</h1>
      <form action="" onSubmit={onSubmitRHF}>
        <Input
          placeholder="What's on your mind?"
          name="postContent"
          register={register}
        />
      </form>
    </>
  );
};

export default UserForm;
