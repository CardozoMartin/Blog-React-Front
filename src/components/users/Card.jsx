

const Card = (props) => {
  const { publicacion } = props;

return (
  <div>
      <h5>{publicacion.publicacion}</h5>
      <button>Editar</button>
      <button>Eliminar</button>
  </div>
);
};

export default Card