"use client";

import {useState} from 'react';

interface Data {    
  username:string,
  useremail:string,
  usermessage:string,
};

export default function AdvancedForm() {
  const [myData setMyData] = useState<Data> {
    username:'',
    useremail:'',
    usermessage:'',
}};

  const [feedbackmessage, setFeedbackMessage] = useState<string[]> (''); 

  const handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setMyData((prevState) => {(
      ...prevState
    )});
  
  const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setMyData((prevState) => {(
      ...prevState
    )});  
    
  const handleChangeMessage = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setMyData((prevState) => {(
      ...prevState
    )});  
  };

  const ValidateForm = {
    if(myData.username.length < 3) {
      setFeedbackMessage('O nome deve possuir no mínimo 3 caracteres.');
    }
    if(myData.usernemail
    }

  }

    return(

    );
}