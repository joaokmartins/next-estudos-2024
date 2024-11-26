// Utilize "use client" para garantir que o componente é renderizado no cliente
"use client";

import React, { useState, ChangeEvent } from 'react';

// Define um tipo para o estado do formulário
type RegistrationFormState = {
  productname: string;
  description: string;
  price: number;
  quantity: number;
};

export default function ProductRegistrationForm() {
  // Define o estado inicial do formulário usando useState
  const [registrationstate, setregistrationstate] = useState<RegistrationFormState>({
    productname: '',
    description: '',
    price: 0,
    quantity: 0,
  });

  // Função para lidar com mudanças no campo de nome do produto
  const handleProductName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target; // Captura o valor do input
    setregistrationstate((prevState) => ({
      ...prevState,
      productname: value, // Atualiza o nome do produto
    }));
  };

  // Função para lidar com mudanças no campo de descrição
  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target; // Captura o valor do input
    setregistrationstate((prevState) => ({
      ...prevState,
      description: value, // Atualiza a descrição
    }));
  };

  // Função para lidar com mudanças no campo de preço
  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target; // Captura o valor do input
    setregistrationstate((prevState) => ({
      ...prevState,
      price: parseFloat(value), // Atualiza o preço, convertendo para número
    }));
  };

  // Função para lidar com mudanças no campo de quantidade
  const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target; // Captura o valor do input
    setregistrationstate((prevState) => ({
      ...prevState,
      quantity: parseInt(value, 10), // Atualiza a quantidade, convertendo para número
    }));
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previne o comportamento padrão de submissão do formulário
    alert(`'productname': ${registrationstate.productname}, 'description': ${registrationstate.description}, 'productprice': ${registrationstate.price}, 'productquantity': ${registrationstate.quantity}`); // Mostra os dados do formulário
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Campo para o nome do produto */}
        <input
          name='productname'
          value={registrationstate.productname}
          onChange={handleProductName}
          type='text'
          placeholder='Insira o nome do produto'
        />

        {/* Campo para a descrição do produto */}
        <input
          name='description'
          value={registrationstate.description}
          onChange={handleDescription}
          type='text'
          placeholder='Insira a descrição do produto'
        />

        {/* Campo para o preço do produto */}
        <input
          name='price'
          value={registrationstate.price}
          onChange={handlePrice}
          type='number' // Alterado para 'number' para permitir apenas números
          placeholder='Insira o preço do produto'
        />

        {/* Campo para a quantidade do produto */}
        <input
          name='quantity'
          value={registrationstate.quantity}
          onChange={handleQuantity}
          type='number' // Alterado para 'number' para permitir apenas números
          placeholder='Insira a quantidade do produto'
        />

        {/* Botão para submeter o formulário */}
        <button type='submit'>
          Cadastrar Produto
        </button>
      </form>
    </div>
  );
}