  "use client";
  import {useState} from 'react';

  interface List {
    id:number;
    name:string;
  }

  export default function TodoList() {
    const [myList, setMyList] = useState<List> ({
      id:0;
      name:'';
    });

    function handleChangeId = (e:React.ChangeEvent<HTMLInputElement>) => {
      {value} = e.target;
      setMyList((prevState) => 
        { ...prevState
      })
    };

    function handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
      {value} = e.target;
      setMyList((prevState) => 
        { ...prevState
      })
    };

    function AddNewTask = 
      if(myList.name.length = 0 ) {
        alert('Preencha o nome da tarefa'.)
      }

      else (
        return;
      )

      // Função para remover um evento da lista
    const removeEvent = (id: number) => {
      setMyList((prevList) => prevList.filter((event) => event.id !== id));
      setFeedbackMessage('Evento removido!');
    };

      return(
        <div className='type' 'container'>
          <input className='type'
            >
          

          
          </input>
        </div>


      )
  }