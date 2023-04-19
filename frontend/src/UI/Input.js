import classes from "./Input.module.css"

const Input = (props) => { 
    return (
        <input type={props.type ? props.type : "text"}>
        {props.children}
        </input>
    )
}

export default Input