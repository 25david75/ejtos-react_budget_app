import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import plusIcon from '../plus.PNG'; 
import minusIcon from '../minus.PNG'; 


const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

    

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

    

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{ currency }{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}> <img src={plusIcon} alt="plus" style={{ width: '20px', height: '20px' }} /></button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)}> <img src={minusIcon} alt="plus" style={{ width: '20px', height: '20px' }} /></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
