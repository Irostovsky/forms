import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    enteredEmail: "",
    enteredPassword: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `Submit: ${enteredValues.enteredEmail} ${enteredValues.enteredPassword}`
    );
  }

  function handleValueChange(enteredInput, event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [enteredInput]: event.target.value,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => handleValueChange("enteredEmail", e)}
            value={enteredValues.enteredEmail}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleValueChange("enteredPassword", e)}
            value={enteredValues.enteredPassword}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
