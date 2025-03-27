import { IUser } from "@/interfaces/user.interface";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function Users() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [userForm, setUserForm] = useState<IUser>({
    id: 0,
    name: '',
    age: 1,
    email: '',
  });
  
useEffect(() => {
  console.log('userform mudou')
}, [userForm]);

  function searchUsers(text: string): void {
    const url = `http://localhost:3001/users/search/${text}`;
    axios
      .get(url)
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        window.alert('Erro ao buscar usuários');
      });
  }

  function handleChangeForm(key: string, value: any): void {
    setUserForm({ ...userForm, [key]: value });
    }

  function handleSearch () {
    searchUsers(userForm.name);
  }

  function handleKeyUpSearch(event: any): void {
    event.key === 'Enter' && searchUsers(userForm.name);
    }

  return (
    <>
      <h3>Busca</h3>
      <div>
        Nome: 
        &nbsp;
        <input 
          type="text" 
          value={userForm.name}
          onChange={(e) => handleChangeForm('name', e.target.value || '')}
          onKeyUp={handleKeyUpSearch}
          />
      </div>
      <hr />
      <div>
        <button          
          disabled={userForm.name.length === 0}
          onClick={handleSearch}>
          buscar</button>
      </div>
      <h3>Resultados ({users.length})</h3>
      {users.map((user, index) => 
       <div key={index}> 
        <div>{user.name} - {user.email}</div>
        <hr />
        </div>
      )}
    </>
  );
}