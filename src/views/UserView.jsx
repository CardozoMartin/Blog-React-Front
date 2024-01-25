import { useEffect, useState } from "react"
import UserCard from "../components/Common/users/UserCard"
import UserForm from "../components/Common/users/UserForm"

const publicacionLs = JSON.parse(localStorage.getItem("publicacion")) || [];

const UserView = () => {
  const [pub , setPub]= useState(publicacionLs)

  useEffect(()=>{
    localStorage.setItem("publicacion", JSON.stringify(pub))
  }, [pub])
  return (
    <div>UserView

        <UserForm setPub={setPub}/>
        <UserCard setPub={setPub} pub={pub}/>
    </div>
  )
}

export default UserView