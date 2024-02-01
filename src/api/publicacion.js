const API_URL = import.meta.env.VITE_API_URL
 export const getPublicacionFn = async ()=>{
  const res = await fetch(` ${API_URL}/publicaciones`)
  if(!res.ok){
    throw new Error("Ocurrio un error")
  }
  const data = await res.json();

  return data
}
export const postPublicacionFn = async(data)=>{
  const res = await fetch(`${API_URL}/publicaciones`,{
    method : "POST",
    body : JSON.stringify(data),
    headers:{
      "Content-Type" : "application/json",
    }
  });
  if(!res.ok){
    throw new Error("Ocurrio un error al guardar una publicacion")
  }
}

export const deletePublicacionFn = async(id)=>{
  const res = await fetch(` ${API_URL}/publicaciones/${id}`,{
    method:'DELETE',
  });
  if(!res.ok){
    throw new Error("Ocurrio un error al guardar una publicacion")
  }
}