import Card from "./Card";


const UserCard = (props) => {

  const {publicacion} = props;
  return (
    <div>
      <h1>Aqui estaria lo publicado</h1>
      {publicacion.map((item)=>{
        <Card pub={item} key={item.id}/>
      })}
    </div>
  )
}

export default UserCard