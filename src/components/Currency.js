import React from 'react';

const Currency = ({ selectedCurrency, handleCurrencyChange }) => {
    return (
        <div className="form-group" style={{ backgroundColor: 'lightgreen', padding: '10px', borderRadius: '5px', display: 'inline-block' }}>
            <label htmlFor="currency" style={{ color: 'green', fontWeight: 'bold' }}>Choose a currency:</label>
            <select id="currency" className="form-control" style={{ backgroundColor: 'white', marginTop: '5px' }} value={selectedCurrency} onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default Currency;
