import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const EditTask = (todo) => {
    
        const [editedTask, setEditedTask] = useState(todo.task)
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const edit = () => {
        dispatch(editedTask(todo.id,editedTask));
        handleClose()
    };
    
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
        EDIT
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>EDIT TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" onChange={e=> setEditedTask(e.target.value)} className="form-control" value={editedTask}/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={edit}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    )
}

export default EditTask
