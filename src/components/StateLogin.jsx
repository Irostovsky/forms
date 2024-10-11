import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsValid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsValid = didEdit.password && enteredValues.password.length < 6;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Submit: ${enteredValues.email} ${enteredValues.password}`);
  }

  function handleValueChange(identifier, event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          onBlur={() => {
            handleInputBlur("email");
          }}
          onChange={(e) => handleValueChange("email", e)}
          value={enteredValues.email}
          error={emailIsValid && "Please enter a valid email address"}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          onBlur={() => {
            handleInputBlur("password");
          }}
          onChange={(e) => handleValueChange("password", e)}
          value={enteredValues.password}
          error={passwordIsValid && "Password is too short"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
