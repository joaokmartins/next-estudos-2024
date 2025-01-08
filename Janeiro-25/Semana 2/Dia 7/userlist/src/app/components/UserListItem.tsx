export default function UserListItem(props: any) {
    const user = props.user;

    function handleRemove() {
      if (props.onRemove) {
        props.onRemove(user);
      }
    }
    return(
      <div>
       <hr />
          <div><b>{user.name || 'N/I'}</b></div>
          <div>{user.email || 'N/I'}</div>
          <div>
            <button onClick={handleRemove}>remover</button>
          </div>
      </div>
    )
};