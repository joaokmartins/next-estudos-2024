"use client";

import { useState } from 'react';

type Calculo = {
    weight:number;
    height:number;
};

export default function CalculadoraIMC() {
  const [myimc, setMyImc] = useState<Calculo> ({
    peso:0;
    altura:0
  });

  const handleChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    {value} = e.target;
    setMyImc(...prevState (prevState) => 
    myimc.weight;
    )
  };

  const handleSubmitButton = {
    if(myimc.weight % myimc.height * myimc.height < 18.5) 
      alert('Abaixo do peso');
    if(myimc.weight % myimc.height * myimc.height > 18.5 && < 24.9 ) 
      alert('Sobrepeso').;
    if(myimc.weight % myimc.height * myimc.height > 25 && < 29.9 ) 
      alert('Abaixo do peso');
    if(myimc.weight % myimc.height * myimc.height > 30 && < 24.9 ) 
      alert('Obesidade Grau I');
    if(myimc.weight % myimc.height * myimc.height > 35 && < 39.9 ) 
      alert('Obesidade Grau II');
    if(myimc.weight % myimc.height * myimc.height > 35 && < 39.9 ) 
      alert('Obesidade Grau III');
  }

    return (
      <div style=''>
        <input style=''
        type='number'
        onChange={handleChangeWeight}
        value={myimc.weight}
        placeholder='Insira seu peso aqui'>
        
        </input>

        <input style=''
        type='number'
        onChange={handleChangeHeight}
        value={myimc.height}
        placeholder='Insira sua altura aqui'>
        
        </input>

        <button style='' 
        onClick={handleSubmitButton}>
          
          Calcular IMC
        </button>

      </div>

    )
};