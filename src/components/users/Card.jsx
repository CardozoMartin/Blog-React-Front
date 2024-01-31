import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"




const ContentCard = (props) => {
  const { publicacion } = props;

return (
 
      
      
  <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg border m-3 max-w-[800px]  mx-auto p-5">
    <div className="flex justify-end">

<Button variant="outline" className="bg-slate-900 border-none hover:bg-black hover:text-white hover:border-solid">
<DropdownMenu>
  <DropdownMenuTrigger>...</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</Button>
    </div>

    
    
  <div className="bg-blend-darken  sm:p-6">

    <h3 className=" text-lg text-white-900 flex-nowrap whitespace-normal overflow-hidden overflow-ellipsis">
      {publicacion.publicacion}
    </h3>
  </div>
</article>

);
};

export default ContentCard