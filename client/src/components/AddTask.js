import axios from 'axios';
import { useState } from 'react';


import './AddTask.css';



const AddTask = () => {
    const [ userInput, setUserinput ] = useState('');
    function store(event) {
        event.preventDefault();
        if( userInput !== '' && userInput !== false ) {
            axios.post(`http://localhost:4000/task/store`, {
                body: userInput,
                status: 'pending'
            }).then(() => setUserinput(''))
        }
    }
    return (
        <div className="add-task-wrapper">
            <form className="add-task-wrapper__form">
                <input className="add-task-wrapper__input" value={ userInput } onChange={ e => setUserinput(e.target.value) } />
                <button className="add-task-wrapper__btn-submit" type="button" onClick={ e => store(e)} >ثبت</button>
            </form>
        </div>
    )
}

export default AddTask;