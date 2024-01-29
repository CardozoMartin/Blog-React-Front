import { useQuery } from "@tanstack/react-query";
import { getPublicacionFn } from "../api/publicacion";
import UserForm from "../components/users/UserForm";
import UserCard from "../components/users/UserCard";
import { Button } from "@/components/ui/button"
const UserView = () => {
  const {
    data: publicacion,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["publicaciones"], queryFn: getPublicacionFn });

  if (isError) {
    return (
      <div>
        <UserForm />
        <h1>Ocurrio un error al cargar</h1>
      </div>
    );
  }

  return (
    <div className="container">
      
      <UserForm />
      {isLoading ? (
        <h3>Cargando...</h3>
      ) : (
        <UserCard publicacion={publicacion} />
      )}
      
    </div>
  );
};

export default UserView;
