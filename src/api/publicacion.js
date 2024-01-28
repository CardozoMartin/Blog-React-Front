const API_URL = import.meta.env.VITE_API_URL
 export const getPublicacionFn = async ()=>{
  const res = await fetch(` ${API_URL}/publicaciones`)
  if(!res.ok){
    throw new Error("Ocurrio un error")
  }
  const data = await res.json();

  return data
}