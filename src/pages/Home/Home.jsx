import Card from '../../components/Card/Card'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Expense Tracker</h1>

            {/* Cards and pie chart wrapper */}

            <div className={styles.cardsWrapper}>
                <Card
                    title="Wallet Balance"
                    money="4500"
                    buttonText="+ Add Income"
                    buttonType='success'
                    handleClick={() => {}} />

                <Card
                    title="Expenses"
                    money="500"
                    buttonText="+ Add Expense"
                    buttonType='failure'
                    success = {false}
                    handleClick={() => {}} />
            </div>

        </div>
    )
}