import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom'
import { UpdateState } from '../UpdateState/updatestate';
import { Delete } from '../Delete/delete';
import style from './style.css';

export const Card = ({ listOfTodo }) => {

    const { id } = useParams()
    const [todo, setTodo] = useState([])
    const [todoState, setTodoState] = useState({})

    useEffect(() => {
        fetch(`/api/${id}`)
        .then(response => response.json())
        .then(data => setTodo(data))
        . catch(err => (
            console.log(err)
        ))
    }, [id])

    const handleClick = (todo) => () => {
        todo.state = !todo.state
        console.log(todo)
        setTodoState(todo)
    } 

    return (
        <>
            {listOfTodo.map(todo => {
                return (
                    <div class="list">
                        <ul key={todo.id}>
                                <li>
                                    <label>
                                        <input type="checkbox" onClick={handleClick(todo)} defaultChecked={todo.state}/><p>{todo.content}</p> 
                                        
                                        <UpdateState todoState={todoState}/>
                                        <Delete id={todo.id}></Delete>
                                    </label>
                                </li>
                                <span></span>
                        </ul>
                    </div>
                )
            })}
        </>
    )
}