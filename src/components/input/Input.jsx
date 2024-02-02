const Input = (props) => {
  const {
    placeholder,
    type = "text",
    name,
    options = {},
    register,
    className = "",
    
  } = props;
  return (
    
      <input
        type={type}
        id={`${name}-input`}
        className={ `${className}`}
        placeholder={placeholder}
        {...register(name, options)}
      />
   
  );
};

export default Input;