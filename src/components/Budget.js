import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = ({ selectedCurrency }) => {
    const { budget, totalExpenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    const submitNewBudget = () => {
        const value = parseInt(newBudget);
        if (value <= 20000) {
            if (value >= totalExpenses) {
                dispatch({
                    type: 'SET_BUDGET',
                    payload: value,
                });
            } else {
                alert("You cannot reduce the budget value lower than the spending.");
            }
        } else {
            alert("Budget cannot exceed 20,000");
        }
    };

    return (
        <div className='alert alert-secondary' style={{ textAlign: 'center' }}>
            <span>Budget: {selectedCurrency}{budget}</span>
            <div style={{ margin: '10px 0' }}>
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
            </div>
            <button className="btn btn-primary" onClick={submitNewBudget} style={{ marginTop: '10px' }}>
                Set Budget
            </button>
        </div>
    );
};

export default Budget;
