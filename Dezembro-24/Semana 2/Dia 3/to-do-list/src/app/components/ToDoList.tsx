  "use client";

  import { useState } from 'react';

  type ToDoListState = {
    id:number;
    taskname:string;
    description:string;
  } 

  export default function ToDoList() = {

  const [ListState, setListState] = useState<ToDoListState> => ({
          id:;
          taskname:'';
          description:'';
  });

  };

  const handleChangeTask = (e:ChangeEvent<HTMLInputElement>) => {
      const {value} = e.target;
        setToDoListState{(prevState) => {
        ...prevState}
        value = ToDoListState.taskname;  
      };

      return (
          


      )
  }

