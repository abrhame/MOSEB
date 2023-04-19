import { EXPORT_DETAIL } from 'next/dist/shared/lib/constants'
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button className={`${classes.button} ${props.className ? props.className : ""}`}>
            {props.children}
        </button>
    )
}

export default Button