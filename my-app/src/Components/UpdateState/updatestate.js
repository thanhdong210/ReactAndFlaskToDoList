/* import React from 'react'

export const UpdateState = ({ id, userState }) => {

    const updateTodo = () => {
        fetch(`/api/update/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                state: userState
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
        .then (data => {
            console.log(data)
        })
        
        
    }
    return (
        <>
            <button onClick={ updateTodo }>Update</button>
        </>
    )
} */

import React from 'react'

export const UpdateState = ({ todoState }) => {

    const updateTodo = () => {
        fetch(`/api/update/${todoState.id}`, {
            method: 'POST',
            body: JSON.stringify({
                id: todoState.id,
                state: todoState.state
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
        .then (data => {
            console.log(data)

        }). catch(err => (
            console.log(err)
        ))

        console.log(todoState)
        
        
    }
    return (
        <>
            <button onClick={ updateTodo }>Update</button>
        </>
    )
}