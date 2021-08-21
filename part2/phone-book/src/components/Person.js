import React from 'react'

function Person({person}) {
    console.log(person.name)
    return (
        <div>
            <li>{person.name}</li>
        </div>
    )
}

export default Person
