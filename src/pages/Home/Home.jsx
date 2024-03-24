import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import styles from './Home.module.css'
import TransactionList from '../../components/TransactionList/TransactionList'
import ExpenseForm from '../../components/Forms/ExpenseForm/ExpenseForm'
import Modal from '../../components/Modal/Modal'
import AddBalanceForm from '../../components/Forms/AddBalanceForm/AddBalanceForm'

export default function Home() {

    const [balance, setBalance] = useState(0)
    const [expense, setExpense] = useState(0)
    const [expenseList, setExpenseList] = useState([])
    const [isMounted, setIsMounted] = useState(false)

    //Show hide modals
    const [isOpenExpense, setIsOpenExpense] = useState(false)
    const [isOpenBalance, setIsOpenBalance] = useState(false)

    useEffect(() => {

        //Check localStorage
        const localBalance = localStorage.getItem('balance')

        if (localBalance) {
            setBalance(localBalance)
        }
        else {
            setBalance(5000)
            localStorage.setItem('balance', 5000)
        }

        const items = JSON.parse(localStorage.getItem('expenses'))
        if (items) {
            setExpenseList(items)
            setIsMounted(true)
        }

    }, [])

    // saving expense list in localStorage
    useEffect(() => {

        if (isMounted) {
            localStorage.setItem('expenses', JSON.stringify(expenseList))
        }

    }, [expenseList])

    return (
        <div className={styles.container}>
            <h1>Expense Tracker</h1>

            {/* Cards and pie chart wrapper */}

            <div className={styles.cardsWrapper}>
                <Card
                    title="Wallet Balance"
                    money={balance}
                    buttonText="+ Add Income"
                    buttonType='success'
                    handleClick={() => { setIsOpenBalance(true) }} />

                <Card
                    title="Expenses"
                    money={expense}
                    buttonText="+ Add Expense"
                    buttonType='failure'
                    success={false}
                    handleClick={() => { setIsOpenExpense(true) }} />
            </div>

            {/* Transactions and bar chart wrapper */}
            <div className={styles.transactionsWrapper}>

                <TransactionList transactions={expenseList} editTransactions={setExpenseList} title='Recent Transactions' />

            </div>


            {/* Modals */}
            <Modal isOpen={isOpenExpense} setIsOpen={setIsOpenExpense}>
                <ExpenseForm setIsOpen={setIsOpenExpense} expenseList={expenseList} setExpenseList={setExpenseList} />
            </Modal>

            <Modal isOpen={isOpenBalance} setIsOpen={setIsOpenBalance}>
                <AddBalanceForm setIsOpen={setIsOpenBalance} />
            </Modal>


        </div>
    )
}