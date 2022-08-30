import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   useEffect(() => {
  //     console.log(email, password);
  //   }, [email, password]);

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          //   e.preventDefault();
          //   setEmail = e.target[0].value;
          //   setPassword = e.target[1].value;
          actions.nuevousuario(email, password);
        }}
      >
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            actions.Login(email, password);
          }}
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};
