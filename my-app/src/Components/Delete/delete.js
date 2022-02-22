import React, {useState, useEffect} from 'react'

export const Delete = ({ id }) => {

    const [todo, setTodo] = useState([])

    useEffect(()=> {
        fetch('/api').then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(data => setTodo(data))
    },[])
    const deleteTodo = () => {
        fetch(`/api/delete/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                id: id
            })
        }).then(response => response.json())
        .then (data => {
            console.log(data)
        })
        .then(message => {
            console.log(message)
            getLastestTodo()
        })
    }
    const getLastestTodo = () => {
        fetch('/api').then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(data => setTodo(data))

        console.log('hi')
    }

    return (
        <>
            <button onClick={ deleteTodo } onChange={getLastestTodo}>Delete</button>
        </>
    )
}