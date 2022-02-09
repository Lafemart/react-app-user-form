
import Card from "../UI/Card";
import style from "./UsersList.module.css"

const UsersList = (props) => {

    return (
        props.users.length > 0 &&  
        <Card className={style.users}>
        <ul>
            {props.users.map((user) => (
                <div key={user.id}>
                    <li>{`Fullname: ${user.firstname}`} </li>
                    <li>{` Account Number: ${user.account}`} </li>
                </div>
            ))}
        </ul>
        </Card>
    );
};

export default UsersList;