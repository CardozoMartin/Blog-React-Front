import { create } from "zustand";

export const usePublication = create((set)=>({
    // envolvemos el objeto a devolver
    publication: null,
    setPubToEdit: (publication)=> set ({publication }),
    clearPub:()=>set ({publication : null})

}))