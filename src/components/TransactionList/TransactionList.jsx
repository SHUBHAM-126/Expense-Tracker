import TransactionCard from '../TransactionCard/TransactionCard'
import styles from './TransactionList.module.css'

export default function TransactionList({ transactions, title }) {



    return (
        <div className={styles.transactionsWrapper}>

            {title && <h2>{title}</h2>}

            {transactions.length > 0 ?
                <div className={styles.list}>
                    {transactions.map(transaction => (
                        <TransactionCard details={transaction} key={transaction.id} />
                    ))}
                </div>
                : (
                    <div>
                        <p>No transactions!</p>
                    </div>
                )
            }
        </div>
    )
}