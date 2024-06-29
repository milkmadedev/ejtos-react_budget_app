import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CHG = () => {
    const { dispatch } = useContext(AppContext);

    const handleCHG = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value }); // Update the global currency
    };
    const alertType = 'alert-info';
    return (
        <div className={`alert ${alertType}`}>
            <label htmlFor="currency">Currency:</label>
            <select className={`alert ${alertType}`} id="currency" name="currency" onChange={handleCHG}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};
export default CHG;