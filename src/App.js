import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


const App = () => {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (name, acct) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {firstname: name, account:acct, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <AddUser onAddUser = {onAddUserHandler} />
      <UsersList users={usersList} />      
    </div>
  );
}
export default App;
