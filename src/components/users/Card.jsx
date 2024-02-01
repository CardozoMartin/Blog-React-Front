import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { deletePublicacionFn } from "../../api/publicacion";





const ContentCard = (props) => {
  const { publicacion } = props;
  const queryClient = useQueryClient();

  const { mutate : deletePublicacion } = useMutation({
    mutationFn : deletePublicacionFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Publicacion Eliminada.");

      queryClient.invalidateQueries("publicaciones");
    },
    onError: () => {
      Swal.close();
      toast.error("ocurrio un error eliminando la publicacion");
    },
  })

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estas Seguro?",
      text: `Estas por eliminar la publicacion "${publicacion.publicacion}"`,
      showCancelButton: true,
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        deletePublicacion(publicacion.id);
      }
    });
  };

return (
 
      
      
  <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg border m-1 max-w-[800px]  mx-auto p-5 bg-slate-800">
    <div className="flex justify-end">


<DropdownMenu>
  <DropdownMenuTrigger className="font-bold hover:text-black">...</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Opciones</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Editar</DropdownMenuItem>
    <DropdownMenuItem onClick={ handleDelete}>Eliminar</DropdownMenuItem>
    <DropdownMenuItem>Reportar</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>

    
    
  <div className="  sm:p-6">

    <h3 className=" text-lg text-white-900 flex-nowrap whitespace-normal overflow-hidden overflow-ellipsis">
      {publicacion.publicacion}
    </h3>
  </div>
</article>

);
};

export default ContentCard