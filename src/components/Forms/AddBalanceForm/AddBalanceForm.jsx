import styles from './AddBalanceForm.module.css'
import Button from '../../Button/Button.jsx'
import { useState } from 'react'

export default function AddBalanceForm({ setIsOpen, setBalance }) {

    const [income, setIncome] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setBalance(prev => prev + Number(income))
        setIsOpen(false)
    }

    return (

        <div className={styles.formWrapper}>
            <h3>Add Balance</h3>
            <form onSubmit={handleSubmit}>

                <input
                    type="number"
                    placeholder='Income Amount'
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    required
                />

                <Button type="submit" style="primary" shadow>Add Balance</Button>

                <Button
                    style='secondary'
                    shadow
                    handleClick={() => setIsOpen(false)}
                >
                    Cancel
                </Button>
            </form>
        </div>

    )
}