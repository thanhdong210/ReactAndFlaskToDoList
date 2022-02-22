import React from 'react'
import style from '../Card/style.css';

export const Form = ({ userInput, onFormChange, onFormSubmit })=> {

    const handleChange = (event) => {
        onFormChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit()
    }

    return (
        <>  
            <div class="fromsubmit">
                <form onSubmit={handleSubmit}>
                    <h2>My To Do List</h2>
                    <input placeholder="What you want to do?..." type='text' required value={userInput} onChange={handleChange}></input>
                    <input type='submit' class="btn btn-primary"></input>
                </form>
            </div>    
        </>
    )
}