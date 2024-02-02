const API_URL = import.meta.env.VITE_API_URL
 export const getpublicationFn = async ()=>{
  const res = await fetch(` ${API_URL}/publications`)
  if(!res.ok){
    throw new Error("Ocurrio un error")
  }
  const data = await res.json();

  return data
}
export const postpublicationFn = async(data)=>{
  const res = await fetch(`${API_URL}/publications`,{
    method : "POST",
    body : JSON.stringify(data),
    headers:{
      "Content-Type" : "application/json",
    }
  });
  if(!res.ok){
    throw new Error("Ocurrio un error al guardar una publication")
  }
}

export const deletepublicationFn = async(id)=>{
  const res = await fetch(` ${API_URL}/publications/${id}`,{
    method:'DELETE',
  });
  if(!res.ok){
    throw new Error("Ocurrio un error al guardar una publication")
  }
}

export const putpublicationFn = async(data)=>{
  const res = await fetch(`${API_URL}/publications/${data.id}`,{
    method : "PUT",
    body : JSON.stringify(data),
    headers:{
      "Content-Type" : "application/json",
    }
  });
  if(!res.ok){
    throw new Error("Ocurrio un error al guardar una publication")
  }
}