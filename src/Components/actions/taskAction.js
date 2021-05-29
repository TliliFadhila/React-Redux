import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_COMPLETE } from "../types"

export const add_Task = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export const delete_Task = (id) => ({
    type: DELETE_TASK,
    payload: id
})

export const complete = (id) => ({
    type: TOGGLE_COMPLETE,
    payload: id
})
export const edit_Task = (id,value) => ({
    type: EDIT_TASK,
    payload: {id,value}
})


