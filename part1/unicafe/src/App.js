import React, { useState } from 'react'


const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistics = (props) => {
  const all = props.good+props.neutral+props.bad
  const score = (props.good*1 + props.bad*-1 + props.neutral*0) / all
  const positive = (props.good / all) * 100

  return(
    <>
      <p>all {all}</p>
      <p>average {score}</p>
      <p>positive {positive}%</p>
    </>
  )  
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App
