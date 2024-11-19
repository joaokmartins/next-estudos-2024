"use client"

import { useState } from 'react';

type EventRegistrationForm = {
    eventname:string,
    eventDate:Date,
}

export default function Home() {
    const [eventstate, setEventState] = useState<EventRegistrationForm> ({
      eventname:'',
      eventDate:'',    
    });

    const handleChange = (e: Event<inputHTMLElement>) => {

      (prev.. 
        prev default
      )
    };

    const handleSubmit = () => {
      alert('eventname' ${eventstate.eventname}, 'eventDate' ${eventstate.eventDate});
      e.preventdefault()
    }
    
    return (

      <div>
        <form>
          <input
          name='eventname'
          value={eventstate.eventname}
          onChange={handleSubmit}
          type='text'>
            Nome do evento    
          </input>
          <input
          name='eventDate'
          value={eventstate.eventDate}
          onChange={handleSubmit}
          type='date'
          >
            Data do evento
          </input>
          <button type='text'>  
            Criar evento
          </button>
        </form>
      </div>

    )
}
