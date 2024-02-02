const API_URL = import.meta.env.VITE_API_URL

export const postLoginFn = async (formData)=>{
    const res = await fetch(`${API_URL}/users`);


    if(!res.ok){
        throw new Error("ocurrio un error al loguear")
    }

    const user = await res.json();

    const foundUser =user.find((item)=> item.username === formData && item.password === formData.password);

    if(foundUser){
        throw new Error("email o contraseña invalida")
    }

    return {...foundUser, password:undefined}
}