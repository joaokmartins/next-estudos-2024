"use client";

import { useState } from 'react';

type Exchange = {
    value:number
};

export default function ConversorDeMoedas() {
  const [myExchange, setMyExchange] = useState<Exchange> ({''});
  const [exchangeList, setExchangeList] = useState<Number> ('');


  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) {
    {value} = e.target;
    setMyExchange((prevState) => ...prevState)
  };

  const CurrentCurrency == value.myExchange;

  const ConvertExchange = {
    
    CurrentCurrency * ExchangeRateAPI (select);

  }

  const handleSubmitButton = 
  ConvertExchange
  setExchangeList(ConvertExchange);

  if() {
    alert('O valor convertido é ${myExchange.value} em ${ExchangeRateAPI}')
  }

  else (
    alert('Número inválido')
  )
;

    return (
      <div className='styles(ConversorDeMoedas-Texto)'>
        <input className='styles(ConversorDeMoedas-Input)'>
        </input>

        <button className='styles(ConversorDeMoedas-Button)'>

        </button>

      </div>
    );
}
