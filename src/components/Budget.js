import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const maxBudget = 20000; //sets max budget\
    const totalSpent = expenses.reduce((total, expense) => total + expense.cost, 0);

    const handleBudgetChange = (event) => {
        const updatedBudget = Number(event.target.value);
        if (updatedBudget > maxBudget){
            alert(`Budget CANNOT exceed ${maxBudget}`);
            setNewBudget(maxBudget);
            dispatch({ type: 'SET_BUDGET', payload: maxBudget }); // Update the global budget
        }else if (updatedBudget < totalSpent) {
            alert(`Budget cannot be less than the total amount spent (${totalSpent})`)
            setNewBudget(totalSpent);
        }else {
        setNewBudget(updatedBudget);
        dispatch({ type: 'SET_BUDGET', payload: updatedBudget }); // Update the global budget
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{newBudget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;