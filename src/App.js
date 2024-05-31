import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider, AppContext } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';
import Currency from './components/Currency';

const AppContent = () => {
    const { currency, dispatch } = useContext(AppContext);
    
    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };

    return (
        <div className='container'>
            <h1 className='mt-3'>Company's Budget Allocation</h1>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <Budget selectedCurrency={currency} />
                </div>
                <div className='col-sm'>
                    <Remaining selectedCurrency={currency} />
                </div>
                <div className='col-sm'>
                    <ExpenseTotal selectedCurrency={currency} />
                </div>
                <div className='col-sm'>
                    <Currency selectedCurrency={currency} handleCurrencyChange={handleCurrencyChange} />
                </div>
            </div>
            <h3 className='mt-3'>Allocation</h3>
            <div className='row '>
                <div className='col-sm'>
                    <ExpenseList />
                </div>
            </div>
            <h3 className='mt-3'>Change allocation</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <AllocationForm selectedCurrency={currency} />
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <AppProvider>
            <AppContent />
        </AppProvider>
    );
};

export default App;