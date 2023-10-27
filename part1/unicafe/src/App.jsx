import { useState } from 'react'

const Header = ({title}) =>  <h3>{title}</h3>

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const total = good + bad + neutral
  const average = (good*1 + neutral*0 + bad*(-1))/total
  const postitive = `${(good/total)*100}%`

  if (total === 0) {
    return (
    <div>
      No feedback given
    </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text={'Good:'} value={good} />
        <StatisticsLine text={'Neutral:'} value={neutral} />
        <StatisticsLine text={'Bad:'} value={bad} />
        <StatisticsLine text={'Total votes:'} value={total} />
        <StatisticsLine text={'Average'} value={average} />
        <StatisticsLine text={'Postitive'} value={postitive} />
      </tbody>
    </table>
  )

}

const StatisticsLine = ({text, value}) => {
  return(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>)
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <Header title={'Give Feedback'} />
      <Button handleClick={handleGoodClick} text={'good'} />
      <Button handleClick={handleNeutralClick} text={'neutral'} />
      <Button handleClick={handleBadClick} text={'bad'} />
      <Header title={'Statistics:'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
