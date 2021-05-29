import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_Task } from '../Components/actions/taskAction'

const AddTask = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const add = ()=> {
        if(text){
            dispatch(add_Task({id:Math.random(),task:text.trim(),isDone:false}))
            setText("")
        }
        else{
            alert("empty flieds")
        }

    }
    return (
        <div className="add">
            <input type="text" onChange={e=> setText(e.target.value)} value={text}/>
            <button onClick={add}>ADD Task</button>
        </div>
    )
}

export default AddTask
