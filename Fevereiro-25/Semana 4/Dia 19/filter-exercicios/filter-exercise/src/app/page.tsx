"use client";

import React from "react";

export default function Page(){
  const list = [
    {name:"Richard", age: 21},
    {name:"Mark", age: 33},
    {name:"Sergio", age: 44},
    {name:"Robinson", age: 20},
    {name:"Maria", age: 18}
  ];

  // Criar lista apenas com pessoas cuja idade seja superior a 21 anos
  const NovaListaAcimade21anos = () => {
  // Filtrar pessoas com idade superior a 21 anos
  const nomesFiltrados = list.filter(pessoa => pessoa.age > 21);

  //Listar apenas pessoas cuja idade seja superior a 21 anos
  return nomesFiltrados.map((pessoa, index) => (
    <li key={index}>
      Adultos: {pessoa.name} - {pessoa.age} anos
    </li>
  ))

} 
// Exibir no DOM
  return(
    <div>
      <h3>Lista de pessoas acima de 21 anos</h3>
    <NovaListaAcimade21anos />
    </div>
  )
};
