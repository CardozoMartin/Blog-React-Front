import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"





const ContentCard = (props) => {
  const { publicacion } = props;

return (
 
      
      
  <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg border m-1 max-w-[800px]  mx-auto p-5 bg-slate-800">
    <div className="flex justify-end">


<DropdownMenu>
  <DropdownMenuTrigger className="font-bold hover:text-black">...</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Opciones</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Editar</DropdownMenuItem>
    <DropdownMenuItem>Eliminar</DropdownMenuItem>
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