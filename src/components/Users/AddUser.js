
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import style from './AddUser.module.css'


const AddUser = (props) => {
    const [enteredFirstname, setEnteredFirstname] = useState('');
    const [enteredAccount, setEnteredAccount] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredFirstname.trim().length === 0 || enteredAccount.trim().length === 0) {
            return;
        }
               
        props.onAddUser(enteredFirstname, enteredAccount)
        setEnteredFirstname('');
        setEnteredAccount('');
        
    }

    const firstNameChangeHandler = (event) => {
        event.preventDefault();
        setEnteredFirstname(event.target.value); 
    }


    const accountChangeHandler = (event) => {
        event.preventDefault();
        setEnteredAccount(event.target.value); 
    }


    return(
        <Card className ={style.form}>
        <h2>Fund support registration form</h2>
        <form onSubmit={addUserHandler}>    
        <label htmlFor="firstname">Fullname</label>
        <input type="text" id="firstname" onChange={firstNameChangeHandler} value={enteredFirstname} required />       
        <label htmlFor="account">Account Number</label>
        <input type="text" id="account" onChange={accountChangeHandler} value={enteredAccount} required />
        <Button type="submit">Submit Details</Button>
    </form>
    </Card>
    )  
};

export default AddUser; 