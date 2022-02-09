
import Card from "./Card";
import Button from "./Button";
import style from "../UI/ErrorModal.module.css";

const ErrorModal = (props) => {
return (
    <>
    <div className={style.backdrop}></div>
    <Card className={style.modal}>
    <header className={style.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={style.content}>
        <p>{props.message}</p>
    </div>
    <footer className={style.actions}>
        <Button onClick={props.onConfirm}>Okay!</Button>
    </footer>
</Card>
</>
)

}


export default ErrorModal; 