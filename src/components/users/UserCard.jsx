import ContentCard from "./Card";




const UserCard = (props) => {

  const {  publicacion } = props;

  console.log(publicacion);
  return (
    <div className="mt-20">
      
      {publicacion && publicacion.map((item) => (
        <ContentCard publicacion={item} key={item.id} />
      ))}
    </div>
  )
}

export default UserCard