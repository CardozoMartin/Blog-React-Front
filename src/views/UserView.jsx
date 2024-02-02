import { useQuery } from "@tanstack/react-query";
import { getpublicationFn } from "../api/publication";
import UserForm from "../components/users/UserForm";
import UserCard from "../components/users/UserCard";
const UserView = () => {
  const {
    data: publication,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["publications"], queryFn: getpublicationFn });

  if (isError) {
    return (
      <div>
        <UserForm />
        <h1>Ocurrio un error al cargar</h1>
      </div>
    );
  }

  return (
    <div className="container ">
      
      <UserForm />
      {isLoading ? (
        <h3>Cargando...</h3>
      ) : (
        <div className="container mx-auto">
        <UserCard publication={publication} />
        
        </div>
      )}
      
    </div>
  );
};

export default UserView;
