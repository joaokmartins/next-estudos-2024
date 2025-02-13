// pages/index.tsx

"use client";

import React from 'react';

const IndexPage: React.FC = () => {
    // Definindo um array de usuários 
    const usuarios: string[] = ["João", "Maria", "Pedro", "Ana"];
    
    const ListaDeUsuariosComMaisDe4Letras = () => {
          // Função para filtrar nomes com mais de 4 letras
      const NomesComMaisDe4Letras = () => usuarios.filter(
        if(usuario.length > 4) {
          return
        }
      );
        // Mapeando o array para criar uma nova lista de objetos com nome, comprimento e primeiraletra
        return usuarios.map((usuario) => {
            return (
                <li key={usuario}>
                    Usuário: {NomesComMaisDe4Letras}
                </li>
            );
        });
    };

    return (
        <div>
            <h1>Lista de Usuários com mais de 4 letras</h1>
            <ul>
                {ListaDeUsuariosComMaisDe4Letras()}
            </ul>
        </div>
    );
};

export default IndexPage; 