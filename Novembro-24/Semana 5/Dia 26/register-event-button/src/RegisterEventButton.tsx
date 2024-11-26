"use client";

import { ValueOf } from 'next/dist/shared/lib/constants';
import { useState } from 'react';

type RegisterEventData = {
    participantName:string,
    participantEmail:string,
    ticketType:string,
    sessionPreference:string,
}

export default function RegisterEventButton() {
	const [registereventstate, setRegisterEventState] = useState<RegisterEventData> ({
		participantName:'',
		participantEmail:'',
		ticketType:'Padrão',
		sessionPreference:'Manhã',
	})

	const handleChangeParticipantName = (e:ChangeEvent<HTMLInputElement>) {
		const {value} = (e:value)
		setRegisterEventState((prevState) => {
			(...prevState)
		}) 
	}

	const handleChangeParticipantEmail = (e:ChangeEvent<HTMLInputElement>) {
		const {value} = (e:value)
		setRegisterEventState((prevState) => {
			(...prevState)
		}) 
	
	const handleChangeTicketType = (e:ChangeEvent<HTMLInputElement>) {
		const {value} = (e:value)
		setRegisterEventState((prevState) => {
			(...prevState)
		}) 
			
	const handleChangesessionPreference = (e:ChangeEvent<HTMLInputElement>) {
			const {value} = (e:value)
			setRegisterEventState((prevState) => {
				(...prevState)
			}) 

	const handleSubmit = (
		alert(``)
	)
		
	return (
		<div>
		
		<Form>
			<input
			name={'participantName'}
			value={registereventstate.participantName}
			onChange={handleChangeParticipantName}
			type='text'
			placeholder='Coloque seu nome aqui'
			>
			</input>

			<input
			name={'participantEmail'}
			value={registereventstate.participantEmail}
			onChange={handleChangeParticipantEmail}
			type='text'
			placeholder='Coloque seu email aqui'
			>
			</input>

			<input
			name={'ticketType'}
			value={registereventstate.ticketType}
			onChange={handleChangeTicketType}
			type={'dropdown': ?'Padrão', 'VIP', 'Estudante'}
			placeholder='Coloque seu nome aqui'
			>
			</input>


<input
			name={'sessionPreference'}
			value={registereventstate.sessionPreference}
			onChange={handleChangesessionPreference}
			type={'button': ? 'Tarde', 'Noite'}
			placeholder='Coloque seu nome aqui'
			>
			</input>

		<button type='submit'>
			Registrar
		</button>
		</Form>

		</div>
	)
}