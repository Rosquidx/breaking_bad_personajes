import React, { useEffect, useState } from "react";
import "./effect.css";
import Message from "./Message";
const Simpleform = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { email, name } = formState;

  const handleChange = ({target}) =>{
      setFormState({
          ...formState,
          [target.name] : target.value
      })
  }
  console.log(formState);
  useEffect(() => {
  }, []);

  useEffect(() => {
}, [email]);


  return (
    <>
      <h1>useEffect</h1>
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
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Mi correo es: "
          autoCapitalize="true"
          autoComplete="off"
          onChange={handleChange}
        />

        {name === '123' && <Message />}
      </div>
    </>
  );
};

export default Simpleform;
