import styles from './Button.module.css'

export default function Button({children, handleClick, type='primary', shadow=false}) {

    return (
        <button onClick={handleClick} className={`${styles.button} ${styles[type]} ${shadow && styles.shadow}`}>
            {children}
        </button>
    )
}