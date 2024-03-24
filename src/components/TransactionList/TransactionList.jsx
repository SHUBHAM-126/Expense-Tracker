import TransactionCard from '../TransactionCard/TransactionCard'
import styles from './TransactionList.module.css'
import Modal from '../Modal/Modal'
import ExpenseForm from '../Forms/ExpenseForm/ExpenseForm'
import { useState } from 'react'

export default function TransactionList({ transactions, title, editTransactions }) {

    const [editId, setEditId] = useState(0)
    const [isDisplayEditor, setIsDisplayEditor] = useState(false)

    const handleDelete = (id) => {
        editTransactions(prev => (
            prev.filter(item => item.id != id)
        ))
    }

    const handleEdit = (id) => {
        setEditId(id)
        setIsDisplayEditor(true)
    }

    return (
        <div className={styles.transactionsWrapper}>

            {title && <h2>{title}</h2>}

            {transactions.length > 0 ?
                <div className={styles.list}>
                    {transactions.map(transaction => (
                        <TransactionCard
                            details={transaction}
                            key={transaction.id}
                            handleDelete={() => handleDelete(transaction.id)}
                            handleEdit={() => handleEdit(transaction.id)}
                        />
                    ))}
                </div>
                : (
                    <div className={styles.emptyTransactionsWrapper}>
                        <p>No transactions!</p>
                    </div>
                )
            }

            <Modal isOpen={isDisplayEditor} setIsOpen={setIsDisplayEditor}>
                <ExpenseForm
                    editId={editId}
                    expenseList={transactions}
                    setExpenseList={editTransactions}
                    setIsOpen={setIsDisplayEditor}
                />
            </Modal>
        </div>
    )
}