import React from 'react'

const Header = (props) =>{
    return(
      <>
        <h1>{props.course.name}</h1>
      </>
    )
}
const Content = (props) =>{

    return(
      <>
        {props.parts.map(part =>
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        )}
      </>
    )
}
const Part = (props) => {
    return(
      <>
        <p>
          {props.part} {props.exercises}
        </p>
      </>
    )
}
const Total = (props) =>{
    return(
            <>
              <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
            </>
    )
}
const Course = (props) => {
  return (
    <div>
        <Header course={props.course} />
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts}/>
    </div>
  )
}

export default Course