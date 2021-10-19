import React from 'react'

const tasks = [
    {
        id: 1,
        text: 'Wash car.' ,
        day: 'Nov 1st at 2:30 PM',
        reminder: false,
    },
    {
        id: 2,
        text: 'Go to gym class',
        day: 'Nov 4th at 5:30 PM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Help son finish homework',
        day: 'Nov 7th at 6:30 PM',
        reminder: true,
    }
]

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (<h3 key={task.id} >{task.text}</h3>))}
        </>
    )
}

export default Tasks
