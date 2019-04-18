import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({dispatch}) => {
    let input
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()){
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
            	<header>
                    <input ref={node => input = node} />
                    <button type="submit">
                        Add Todo
                    </button>
                </header>
            </form>
        </div>
    )
}

export default connect()(AddTodo)