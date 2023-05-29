import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => { 
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    //Better Way:An object as a value parameter
    // const [usertInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: '',
    // }); 
    const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value);
        // setUserInput({
        //     ...usertInput,
        //     enterTitle: event.target.value, 
        // });
        // setUserInput((prevState) => { //Will always be the latest state snapshot
        //     return {...prevState, enterTitle: event.target.value};
        // });
    };
    const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value);
        // setEnterAmount({
        //     ...usertInput,
        //     enterAmount: event.target.value,
        // });        
    };

    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value);
        // setEnterDate({
        //     ...usertInput,
        //     enterDate: event.target.value,
        // });
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData ={
            title: enterDate, //enterDate points to the state variable
            amount: +enterAmount,
            date: new Date(enterDate),
        };
        props.onSaveExpenseData(expenseData); //From NewExpense.js 
        setEnterTitle(''); //Overide the input after the form was submitted, then cleared it.
        setEnterAmount('');
        setEnterDate('');
    };
    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__controls'>
                <label>Title</label>
                {/* Point at this fcn, add 2-way binding */}
                 <input 
                    type='text' 
                    value={enterTitle} 
                    onChange={titleChangeHandler} 
                /> 
            </div>

            <div className='new-expense__controls'>
                <label>Amount</label>
                <input 
                    type='number' 
                    min="0.01" 
                    step="0.01"
                    value={enterAmount} 
                    onChange={amountChangeHandler} 
                />
            </div>

            <div className='new-expense__controls'>
                <label>Date</label>
                <input 
                    type='date' 
                    min = "2019-01-01" 
                    max ="2022-12-31" 
                    value ={enterDate}
                    onChange={dateChangeHandler} />
            </div>

            <div className='new-expense__actions'>
                <button type= "button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add expense</button> 
            </div>
        </div>
    </form>
    );
}; 
export default ExpenseForm;