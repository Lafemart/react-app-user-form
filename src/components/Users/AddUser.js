
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import style from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredFirstname, setEnteredFirstname] = useState('');
    const [enteredAccount, setEnteredAccount] = useState('');
    const [error, setError] = useState();    

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredFirstname.trim().length === 0 || enteredAccount.trim().length < 8) {
            setError({
                title: 'Hey! Something went wrong!',        
                message: 'Enter Firstname and Lastnames. Check to confrim your account number, it must be at least 11 digits'
            });
            return;
        }
               
        props.onAddUser(enteredFirstname, enteredAccount)
        setEnteredFirstname('');
        setEnteredAccount('');
        
    }

    const firstNameChangeHandler = (event) => {        
        setEnteredFirstname(event.target.value); 
    }


    const accountChangeHandler = (event) => {    
        setEnteredAccount(event.target.value); 
    };

    const errorHandler = () => {
        setError(null);
    }

    return(
        <>
        {error && <ErrorModal title = {error.title} message = {error.message} onConfirm={errorHandler} />}
        <Card className ={style.form}>
        <h2>Support fund registration form</h2>
        <form onSubmit={addUserHandler}>    
        <label htmlFor="firstname">Fullname</label>
        <input type="text" id="firstname" onChange={firstNameChangeHandler} value={enteredFirstname} />       
        <label htmlFor="account">Account Number</label>
        <input type="text" id="account" onChange={accountChangeHandler} value={enteredAccount} />
        <Button type="submit">Submit Details</Button>
    </form>
    </Card>
    </>
    )  
};

export default AddUser; 