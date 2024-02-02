import ContentCard from "./Card";




const UserCard = (props) => {

  const {  publication } = props;

  console.log(publication);
  return (
    <div className="mt-20">
      
      {publication && publication.map((item) => (
        <ContentCard publication={item} key={item.id} />
      ))}
    </div>
  )
}

export default UserCard