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
import { deletepublicationFn } from "../../api/publication";
import { usePublication } from "../../store/usePublication";





const ContentCard = (props) => {

  const { setPubToEdit} = usePublication();
  const { publication } = props;
  const queryClient = useQueryClient();

  const { mutate : deletepublication } = useMutation({
    mutationFn : deletepublicationFn,
    onSuccess: () => {
      Swal.close();
      toast.success("publication Eliminada.");

      queryClient.invalidateQueries("publicationes");
    },
    onError: () => {
      Swal.close();
      toast.error("ocurrio un error eliminando la publication");
    },
  })

  const handleEdit = ()=>{
    setPubToEdit(publication)
  }

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estas Seguro?",
      text: `Estas por eliminar la publication "${publication.publication}"`,
      showCancelButton: true,
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        deletepublication(publication.id);
      }
    });
  };

return (
 
      
      
  <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg border m-1 max-w-[800px]  mx-auto p-5 bg-slate-800">
    <div className="flex justify-end">


<DropdownMenu>
  <DropdownMenuTrigger className="font-bold hover:border-none">...</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Opciones</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={ handleEdit}>Editar</DropdownMenuItem>
    <DropdownMenuItem onClick={ handleDelete}>Eliminar</DropdownMenuItem>
    <DropdownMenuItem>Reportar</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>

    
    
  <div className="  sm:p-6">

    <h3 className=" text-lg text-white-900 flex-nowrap whitespace-normal overflow-hidden overflow-ellipsis">
      {publication.publication}
    </h3>
  </div>
</article>

);
};

export default ContentCard