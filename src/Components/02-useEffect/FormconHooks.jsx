import React, { useEffect } from "react";
import useForm from "../../hooks/useForm";
import "./effect.css";

const FormconHooks = () => {
  const [formValues, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { email, name, password } = formValues;

  useEffect(() => {
    console.log("Email cambio");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <h1>Formulario Con Custom Hooks</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Mi nombre es: "
          autoCapitalize="true"
          autoComplete="off"
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Mi correo es: "
          autoCapitalize="true"
          autoComplete="off"
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          value={password}
          placeholder="*******"
          autoCapitalize="true"
          autoComplete="off"
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-success" onClick={handleSubmit}>
        Guardar datos
      </button>
    </>
  );
};

export default FormconHooks;
