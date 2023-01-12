import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import "./styles.css";
import { FaEye } from "react-icons/fa";
const eye = <FontAwesomeIcon icon={FaEye} />;

function Password() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    // <div className="App">
    //   <input
    //     name="username"
    //     type="text"
    //     placeholder="Username"
    //     ref={register({ required: "This is required." })}
    //   />{" "}
    <div className="pass-wrapper">
      {" "}
      <input
        placeholder="Password"
        name="password"
        type={passwordShown ? "text" : "password"}
        // ref={register({ required: "This is required." })}
      />
      <i onClick={togglePasswordVisiblity}>{eye}</i>{" "}
    </div>
    // <button type="submit" onClick={handleSubmit(onSubmit)}>
    //   Submit
    // </button>
    // </div>
  );
}

export default Password;
