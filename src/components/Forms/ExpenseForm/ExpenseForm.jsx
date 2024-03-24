import styles from './ExpenseForm.module.css'
import Button from '../../Button/Button.jsx'
import { useState } from 'react'

export default function ExpenseForm({ setIsOpen, expenseList, setExpenseList }) {

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        price: '',
        date: '',
    })

    const handleChange = (e) => {
        const name = e.target.name
        setFormData(prev => ({ ...prev, [name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const lastId = expenseList[expenseList.length - 1].id
        setExpenseList(prev => [...prev, { ...formData, id: lastId + 1 }])

        setFormData({
            title: '',
            category: '',
            price: '',
            date: '',
        })

        setIsOpen(false)
    }

    return (

        <div className={styles.formWrapper}>
            <h3>Add Expenses</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder='Title'
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <input type="number" name="price" placeholder='Price'
                    value={formData.price}
                    onChange={handleChange}
                    required
                />

                <select name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value='' disabled>Select category</option>
                    <option value='food'>Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="travel">Travel</option>
                </select>

                <input name="date" type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <Button type="submit" style="primary" shadow>Add Expense</Button>

                <Button style='secondary' shadow
                    handleClick={() => setIsOpen(false)}
                >
                    Cancel
                </Button>
            </form>
        </div>

    )
}