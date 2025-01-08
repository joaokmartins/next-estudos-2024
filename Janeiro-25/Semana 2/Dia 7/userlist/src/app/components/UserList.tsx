import { useState } from 'react'; 
import UserListItem from './UserListItem';

export default function UserList() {
  const [users, setUsers] = useState<any>([
    { name: 'amanda' , email: 'amanda@gmail.com' },
    { name: 'joao', email: 'joao@gmail.com' },
    { name: 'pedro', email: 'pedro@gmail.com' },
    { name: 'bruno' , email: 'pirofagista@gmail.com' },
    { name: 'breno', email: 'breno@gmail.com' },
    { name: 'lucas', email: 'lucas@gmail.com' },
  ]);

  const [filter, setFilter] = useState<string>('');

  function handleChangeFilter(event: any) {
    setFilter(event.target.value);
  }

  function handleRemoveUser(user: any) {
    const filteredList = [...users];
    const index = filteredList.findIndex((u) => u.name === user.name);
    filteredList.splice(index, 1);
    setUsers(filteredList);
  };      

  const filteredUsers = users.filter((user:any) =>  user.name.includes(filter));

    return(
      <div>
          <h3>Lista de usuários: {(filteredUsers.length)}</h3>
          <div>
             <input 
                 type='text' 
                 placeholder='filtrar...'
                 value={filter}
                 onChange={handleChangeFilter}
             />
          </div>
        {filteredUsers.map((user, index) => 
             <UserListItem 
                key={index} 
                user={user}
                onRemove={handleRemoveUser}
                />

          )};
      </div>  
    )
}