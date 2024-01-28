

const Card = (props) => {
    const {pub} = props;


  return (
    <div>
        <h5>{pub.publicacion}</h5>
        <button>Editar</button>
        <button>Eliminar</button>
    </div>
  )
}

export default Card