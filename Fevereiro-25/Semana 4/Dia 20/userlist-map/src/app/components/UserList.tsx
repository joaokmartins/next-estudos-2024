"use client";

import React from "react";
import User from "./User";

export default function UserList() {
  // Receber o array de usuários
  interface User = [
    id: props;
    name: props;
    age: props;
];

  const UsuariosAcimaDe18 = () => {
  // Filtrar usuários com idade maior ou igual a 18 anos
  const usuariosFiltrados = User.filter(User.age => User.age => 18);

  // Método map para iterar sobre os usuários filtrados e exibir lista
  return usuariosFiltrados.map((User, index) => (
    <li key={index}>
      Maiores de 18 anos
    </li>
  ))
}
};
