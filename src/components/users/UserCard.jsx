import Card from "./Card";


const UserCard = (props) => {

  const {  publicacion } = props;

  console.log(publicacion);
  return (
    <div>
      <h1>Aqui estaria lo publicado</h1>
      {publicacion && publicacion.map((item) => (
        <Card publicacion={item} key={item.id} />
      ))}
    </div>
  )
}

export default UserCard