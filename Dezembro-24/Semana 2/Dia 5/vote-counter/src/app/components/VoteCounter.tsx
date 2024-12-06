"use client";

import { useState} from 'react';

type VoteOptions = {
  
  OptionA : {
    id:number;
    result:boolean;
  }
  
  OptionB : {
    id:number;
    result:boolean;
  }
  
  OptionC : {
    id:number;
    result:boolean;
  }
}

export default function VoteCounter() {
  const [optioncounter, setOptionCounter] = useState<VoteOptions> ({
     OptionA: {
      id:0;
      result:false;
     };

     OptionB: {
      id:0;
      result:false;  
    }

     OptionC: {
      id:0;
      result:false;
  });

  const handleChangeButtonA = ;

  const handleChangeButtonB = ;

  const handleChangeButtonC = ;



    return (

      <div>
        <button onChange={HandleChangeButton}>
          Votar
        </button>

        <button>
          Opção B
        </button>

        <button>
          Opção C
        </button>
      </div>

    );
}