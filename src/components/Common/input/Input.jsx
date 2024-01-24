import { useState } from "react";


const Input = (props) => {
  const {
    placeholder,
    name,
    options = {},
    register,
    className = "",
    error = false,
  } = props;

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const inputProps = {
    type: "text",
    id: `${name}-input`,
    className: ``,
    placeholder,
    ...register(name, options),
  };

  return (
    <div className={`form-group ${className}`}>
      <div style={{ position: "relative" }}>
        <textarea {...inputProps} />

        {image && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src={URL.createObjectURL(image)}
              alt="Selected"
              style={{ maxWidth: "100%", maxHeight: "150px" }}
            />
          </div>
        )}
      </div>

      <div className="mt-2">
        <label htmlFor={`${name}-image`} className="form-label">
        
        </label>
        <input
          type="file"
          id={`${name}-image`}
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default Input;
