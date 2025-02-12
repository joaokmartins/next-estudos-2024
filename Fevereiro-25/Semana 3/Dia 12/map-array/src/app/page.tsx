// pages/index.tsx

"use client";

import React from 'react';

const IndexPage: React.FC = () => {
    // Definindo um array de usuários 
    const usuarios: string[] = ["João", "Maria", "Pedro", "Ana"];

    // Função para adicionar prefixo "Dr." e um sufixo "Jr." a cada nome
    const adicionarPrefixoeSufixo = () => {
        // Mapeando o array para criar uma nova lista onde é adicionado um prefixo e um sufixo a cada nome
        return usuarios.map((usuario, index) => {
            return (
                <li key={index}>Usuário {index + 1}: Dr. {usuario} Jr.</li>
            );
        });
    };

    return (
        <div>
            <h1>Lista de Usuários com prefixo e sufixo</h1>
            <ul>
                {adicionarPrefixoeSufixo()}
            </ul>
        </div>
    );
};

export default IndexPage;