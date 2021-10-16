import React from 'react'
import {useState} from 'react'

const AddTask = (props) => {
    const[text, setText] = useState('')
    const[day, setDay] = useState('')
    const[reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('add task')
            return
        }

        props.onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Nazwa dupy</label>
                <input type='text' 
                placeholder='Nazwa dupy' 
                value={text} 
                onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Rodzaj dupy</label>
                <input type='text' 
                placeholder='Rodzaj dupy'
                value={day} 
                onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Ulubiona dupa</label>
                <input type='checkbox' 
                checked={reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value='Dodaj dupę' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
