import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Privado = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   useEffect(() => {
  //     console.log(email, password);
  //   }, [email, password]);

  return (
    <h1>{store.permiso ? "acceso concedido" : "404 Acceso no concedido"}</h1>
  );
};
