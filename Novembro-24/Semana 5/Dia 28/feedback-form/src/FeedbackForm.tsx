"use client";

import { useState } from 'react';

type FeedbackFormState = {
    name:string;
    email:string;
    comment:string;
    rating:number;
}

export default function FeedbackForm() {
  const [feedbackform, setFeedbackForm] = useState<FeedbackFormState> ({
    name:'',
    email:'',
    comment:'',
    rating:0,
  });

  const handleChangeName = (e:ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setFeedbackForm((prevState) => 
    ...prevState;
    )
  }


  const handleChangeEmail = (e:ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setFeedbackForm((prevState) => 
    ...prevState;
    )
  }


  const handleChangeComment = (e:ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setFeedbackForm((prevState) => 
    ...prevState;
    )
  }


  const handleChangeRating = (e:ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setFeedbackForm((prevState) => 
    ...prevState;
    )
  }

    return (
      <div>
        <Form onState={handleChangeButton}>
          <input
          name='name'
          value={FeedbackForm.name}
          onChange={handleChangeName}
          type='text'
          placeholder='Insira seu nome aqui'>

          <input
          name='email'
          value={FeedbackForm.email}
          onChange={handleChangeEmail}
          type='text'
          placeholder='Insira seu email aqui'>  
          </input>


          <input
          name='comment'
          value={FeedbackForm.comment}
          onChange={handleChangeComment}
          type='text'
          placeholder='Insira seu comentário aqui'>
          </input>

          <input
          name='Rating'
          value={FeedbackForm.rating}
          onChange={handleChangeRating}
          type='text'
          placeholder='Insira sua nota aqui'>
          </input>


        <button type='submit'>
        Enviar Feedback
        </button>


          </input>
        </Form>
      </div>

    )
} 