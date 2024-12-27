"use client";

import {useState} from 'react';
import styles from './IMCCalculator.module.css';

interface data {
    weight:number;
    height:number;
};

export default function IMCCalculator() {
  const [item, setItem] = useState<data> ({
    weight:0;
    height:0;
  });

  const handleChangeWeight = (e:React.ChangeEvent<HTMLinputElement>) => {
    const {value} = e.target;
    setItem(...prevState (prevState) =>)
  };

  const IMCCalc = 
  if(item.weight < 0) {
    alert('O peso deve ser um número negativo.')
  };
  
  if(item.height < 0 || > 3) {
    alert('A altura deve ser um número positivo entre 0 e 3 metros.')
  };

  if(item.weight && item.height.trim) {
    alert('Ambos os campos devem ser preenchidos.')
  }

  newIMCCalc = item.weight / (item.height * item.height); 

  const handleSubmitButton = 
  if(newIMCCalc < 18.5) {
    alert('Abaixo do peso.');
  if(newIMCCalc > 18.5  && < 24.9) {
    alert('Peso normal');
  if(newIMCCalc > 25 && < 29.9) {
    alert('Sobrepeso');
  if(newIMCCalc > 30 && < 34.9) {
    alert('Obesidade Grau l');
  if(newIMCCalc > 35 && < 39.9) {
    alert('Obesidade Grau ll');
  if(newIMCCalc > 40) {
    alert('Obesidade Grau lll')
  } 
  }  

  }

    return(

    )
}